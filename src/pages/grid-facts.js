import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { GatsbyLink } from "gatsby-theme-material-ui"
import Img from "gatsby-image"

import GridView from "../components/grid-view"

const useStyles = makeStyles({
  toggleButtons: {
    margin: '5px'
  }
});


function ListView({ edges }) {
  return (
    <List component="nav">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, image } = node.frontmatter
          return (
            <ListItem button component={GatsbyLink} to={slug} key={node.id}>
              <ListItemAvatar>
                <Avatar variant="rounded" fixed={image.src.childImageSharp.listImage} component={Img} />
              </ListItemAvatar>
              <ListItemText primary={title} secondary={node.excerpt}/>
            </ListItem>
          )
        })}
    </List>
  )
}

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
          <ToggleButton value="grid" aria-label="module">
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
