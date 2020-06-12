import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import swiper from "swiper"


const  FourthPage = ({data: { allFacts: { edges }}}) => {
  return (
    <Layout>
      <SEO title="Page four" />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default FourthPage

export const page4Query = graphql`
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









