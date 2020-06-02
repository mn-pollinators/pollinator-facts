import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

const useStyles = makeStyles({
  cards: {
    display: 'flex',
    overflowX: 'auto',
    margin: '50px 0'
  },
  factCard: {
    minWidth: '200px',
    margin: '5px',
  }
});

const IndexPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
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