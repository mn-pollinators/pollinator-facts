import React from "react"
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { IconButton } from 'gatsby-theme-material-ui';
import CardMedia from '@material-ui/core/CardMedia'
import { GatsbyLink } from "gatsby-theme-material-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 500,
      height: 500,
    },
    gridListTile: {
      width: 190,
      height: 'auto',
    },
  
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

const ThirdPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  
  return (
    <Layout>
      <SEO title="Page Three" />

      <div className={classes.root}>
        <GridList className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Featured</ListSubheader>
          </GridListTile>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title, image } = node.frontmatter
            const { id } = node

            return (
            <GridListTile component={GatsbyLink} to={slug} key={id} className={classes.gridListTile}>
              <CardMedia component={Img} fluid={image.src.childImageSharp.fluid} alt={title} />
              <GridListTileBar
                title={node.frontmatter.title}
                
              />
            </GridListTile>
            )
            })}
        </GridList>
      </div>
    </Layout>
    
  )
}
export default ThirdPage

export const page3Query = graphql`
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
                fluid(maxWidth: 520) {
                  ...GatsbyImageSharpFluid_withWebp
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
