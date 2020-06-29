import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import LargeFactCard from "../components/large-fact-card"


const useStyles = makeStyles({
  card: {
    maxWidth: 520,
    margin: 'auto',
    marginTop: 32,
  },
});

export default ({ data }) => {
  const fact = data.markdownRemark;
  const relatedFactEdges = data.allMarkdownRemark.edges
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={fact.frontmatter.title} />
      <LargeFactCard 
        className={classes.card} 
        factTitle={fact.frontmatter.title} 
        factImage={fact.frontmatter.image} 
        factSource={fact.frontmatter.source} 
        factCategory={fact.frontmatter.category} 
        factHTML={fact.html} 
      />
      <h2>Related Facts</h2>
        {relatedFactEdges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $relatedFactPaths: [String]) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        image {
            src {
                childImageSharp {
                    fluid(maxWidth: 520, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
    allMarkdownRemark(filter: {fileAbsolutePath: {in: $relatedFactPaths }}, sort: {fields: [fields___relatedFileAbsolutePaths]}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
