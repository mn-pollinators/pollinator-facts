import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ToggleLayout from '../components/toggle-layout'
import TagArray from '../components/tag-array'

const Facts = ({data: { allFacts: { distinct, edges }}}) => {
  return (
    <Layout>
      <SEO title="All Facts"/>
      <TagArray allTags={distinct} />
      <ToggleLayout title="Facts" factsData={edges} />
      {/* allPosts.filter(post => searchTags.every(st => post.tags.includes(st)))*/}
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
