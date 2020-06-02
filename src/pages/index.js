import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"


const IndexPage = ({data: { allFacts: { edges }}}) => (
  <Layout>
    <SEO title="Home" />

    {edges.map(({ node }) => (
      <SmallFactCard 
        key={node.id}
        title={node.frontmatter.title}
        category={node.frontmatter.category}
        image={node.frontmatter.image}
      />
    ))}

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

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
                fixed(width: 250) {
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