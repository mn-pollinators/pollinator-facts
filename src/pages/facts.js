import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridView from "../components/grid-view"
import ListView from "../components/list-view"
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';


const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 16
  }
});

const Facts = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  const [gridLayout, changeLayout] = React.useState(true);

  return (
    <Layout>
      <SEO title="All Facts"/>
      <div className={classes.header}>
        <Typography variant="h4" component="h1">
          Facts
        </Typography>
        <ToggleButton value="switchLayout" onChange={() => { changeLayout(!gridLayout); }} >
          {gridLayout? ( <ViewListIcon/> ) : ( <ViewModuleIcon/> )}
        </ToggleButton>
      </div>
      {gridLayout? ( <GridView edges={edges} />) : ( <ListView edges={edges} /> )}
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
        fields {
          slug
        }
        frontmatter {
          title
          category
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
