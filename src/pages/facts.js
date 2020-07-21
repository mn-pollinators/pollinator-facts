import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToggleLayout from '../components/toggle-layout'
import TagFilter from "../components/tag-filter"
import { Context } from '../components/provider'

const Facts = ({ data: { allFacts: { distinct, edges } } }) => {
  return (
    <Layout>
      <SEO title="All Facts" />
      <TagFilter title="Browse" allTags={distinct} />
      <Context.Consumer>
        {context => (
          <ToggleLayout title="Facts" factsData={edges.filter(edge =>
            context.selectedTags.every(selectedTag =>
              edge.node.frontmatter.tags.includes(selectedTag)))} />
        )}
      </Context.Consumer>
    </Layout>
  )
}
export default Facts

export const allFactsQuery = graphql`
query {
  allFacts: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
    distinct(field: frontmatter___tags)
    edges {
      node {
        id
        excerpt(pruneLength: 50)
        fields {
          slug
        }
        frontmatter {
          title
          tags
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
