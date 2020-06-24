import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridView from "../components/grid-view"
import ListView from "../components/list-view"
import { makeStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles({
  title: {
    marginTop: 16
  },
  toggleButtons: {
    margin: '5px'
  }
});

const Facts = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  const [view, setView] = React.useState('grid');
  const changeView = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Layout>
      <SEO title="All Facts"/>
      <Typography variant="h4" component="h1" className={classes.title} >
        Facts
      </Typography>
      <ToggleButtonGroup  exclusive className={classes.toggleButtons} onChange={changeView}>
          <ToggleButton value="list" aria-label="list">
              <ViewListIcon/>
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleIcon/>
          </ToggleButton>
      </ToggleButtonGroup>
      {view==="grid"? ( <GridView edges={edges} />) : ( <ListView edges={edges} /> )}
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
