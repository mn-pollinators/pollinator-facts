import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

export const useStyles = makeStyles({
  cards: {
    display: 'flex',
    margin: '50px 0',
    overflowX: 'auto',
    '@media screen and (min-width: 600px)': {
      overflowX: 'hidden',
    }
  },
  factCard: {
    minWidth: '190px',
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
      </section>

      <section style={{ display:'flex', justifyContent:'space-between'}} >
      </section>

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
