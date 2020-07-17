import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToggleLayout from '../components/toggle-layout'
import TagFilter from "../components/tag-filter"

const Facts = ({data: { allFacts: { distinct, edges }}}) => {
  const fakeSelectedTags = ["example", "plant"];
  return (
    <Layout>
      <SEO title="All Facts"/>
      <TagFilter allTags={distinct} />
      <ToggleLayout title="Facts" factsData={edges.filter(edge => 
        fakeSelectedTags.every(oneFakeTag =>
          edge.node.frontmatter.tags.some(index => index.name === oneFakeTag)))} />
    </Layout>                                
  )
}
export default Facts

export const allFactsQuery = graphql`
query {
  allFacts: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
    distinct(field: frontmatter___tags___name)
    edges {
      node {
        id
        excerpt(pruneLength: 50)
        fields {
          slug
        }
        frontmatter {
          title
          tags {
            name
          }
          image {
            src {
              childImageSharp {
                listImage: fixed(width: 40, height: 40, quality: 70) {
                  ...GatsbyImageSharpFixed_withWebp
                }
                fixed(width: 190, height: 150, quality: 70) {
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
