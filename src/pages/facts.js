import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToggleLayout from '../components/toggle-layout'

const Facts = ({data: { allFacts: { edges }}}) => {

  return (
    <Layout>
      <SEO title="All Facts"/>
      <ToggleLayout
      title="Facts"
      factsData={edges}     
      />
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
        excerpt(pruneLength: 50)
        fields {
          slug
        }
        frontmatter {
          title
          image {
            src {
              childImageSharp {
                listImage: fixed(width: 40, height: 40, quality: 70) {
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
