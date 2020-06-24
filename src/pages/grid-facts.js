import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import GridView from "../components/grid-view"
import ListView from "../components/list-view"

const useStyles = makeStyles({
  toggleButtons: {
    margin: '5px'
  }
});


const GridFacts = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  const [view, setView] = React.useState('grid');
  const changeView = (event, nextView) => {
    setView(nextView);
  };
  return (
    <Layout>
      <SEO title="Grid Facts"/>
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

export default GridFacts

export const page4Query = graphql`
query {
  allFacts: allMarkdownRemark {
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
