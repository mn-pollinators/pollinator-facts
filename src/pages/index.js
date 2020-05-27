import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from 'gatsby-theme-material-ui';
import Img from "gatsby-image"

import Carousel from "react-material-ui-carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  carousel: {
    padding: '3% 15%'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const IndexPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />

      <Carousel className={classes.carousel}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, image } = node.frontmatter
          return (
            <Paper className={classes.paper} eleveation={3} key={node.id}>
              <Typography variant="h5">
                {title}
              </Typography>
              <CardMedia component={Img} fixed={image.src.childImageSharp.fixed} />
              <Button color="primary" href={slug}>Learn More</Button>
            </Paper>
          )
        })}
      </Carousel>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
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
          image {
            src {
              childImageSharp {
                fixed(width: 250) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
}`