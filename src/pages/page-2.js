import React from "react"
import { Link, graphql } from "gatsby"
import { IconButton } from 'gatsby-theme-material-ui';
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center'
    
  },
  cards: {
    // '@media (min-width: 600px)': {
      display: 'flex',
      overflowX: 'auto',
      margin: '50px 0',

    // },
    // '@media (max-width: 600px)': {
      // display: 'flex',
      // overflowX: 'auto',
      // margin: '50px 0',
    // }
  },
  factCard: {
    minWidth: '200px',
    margin: '5px',
  }
});

const SecondPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Page two" />

      <section className={classes.container}>
        <IconButton aria-label="Previous" >
          <NavigateBeforeOutlinedIcon />
        </IconButton>
        <section className={classes.cards}>
          {edges.map(({ node }) => (
              <SmallFactCard
                key={node.id}
                className={classes.factCard}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                image={node.frontmatter.image}
              />
          ))}
          {edges.map(({ node }) => (
          <SmallFactCard
            key={node.id}
            className={classes.factCard}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            category={node.frontmatter.category}
            image={node.frontmatter.image}
          />
        ))}
        </section>
        <IconButton aria-label="Next" >
          <NavigateNextOutlinedIcon />
        </IconButton>
      </section>
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const page2Query = graphql`
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


    