import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  const fact = data.markdownRemark
  return (
    <Layout>
      <SEO title={fact.frontmatter.title} />
      <div>
        <h1>{fact.frontmatter.title}</h1>
        <Img fluid={fact.frontmatter.image.src.childImageSharp.fluid}/>
        <div dangerouslySetInnerHTML={{ __html: fact.html }} />
      </div>
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
        }
      }
    }
  }
`