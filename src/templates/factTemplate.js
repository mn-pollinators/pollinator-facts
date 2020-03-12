import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import LargeFactCard from "../components/large-fact-card"

export default ({ data }) => {
  const fact = data.markdownRemark
  return (
    <Layout>
      <SEO title={fact.frontmatter.title} />
      <LargeFactCard factTitle={fact.frontmatter.title} factImage={fact.frontmatter.image} factSource={fact.frontmatter.source} factHTML={fact.html} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
            src {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            alt
            creator
            license
            url
        }
        source {
          name
          url
        }
      }
    }
  }
`