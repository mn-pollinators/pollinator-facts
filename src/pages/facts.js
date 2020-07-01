import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridView from "../components/grid-view"
import ListView from "../components/list-view"
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import { IconButton } from "@material-ui/core"
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16
  },
  toggle: {
    '@media screen and (max-width: 600px)' : {
      display: 'none'
    }
  }
});

const Facts = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  const [listLayout, changeLayout] = React.useState(true);

  return (
    <Layout>
      <SEO title="All Facts"/>
      <div className={classes.header}>
        <Typography variant="h4" component="h1">
          Facts
        </Typography>
        <IconButton className={classes.toggle} onClick={() => { changeLayout(!listLayout); }} >
          {listLayout? (<Tooltip title="Grid View" aria-label="grid view"><ViewModuleIcon/></Tooltip>) : (<Tooltip title="List View" aria-label="list view"><ViewListIcon/></Tooltip>)}
        </IconButton>
      </div>
      {listLayout? ( <ListView edges={edges} /> ) : ( <GridView edges={edges} />) }
    </Layout>
  )
}

export default Facts

export const allFactsQuery = graphql`
query {
  allFacts: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
    edges {
      node {
        id
        excerpt(pruneLength: 50)
        fields {
          slug
        }
        frontmatter {
          title
          image {
            src {
              childImageSharp {
                listImage: fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                fixed(width: 190, height:150) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }
  }
}`
