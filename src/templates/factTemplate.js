import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeFactCard from "../components/large-fact-card"
import HorizontalFactCard from "../components/horizontal-fact-card";


const useStyles = makeStyles({
  card: {
    marginTop: 32,
  },
  pageWidth: {
    maxWidth: 520,
    margin: 'auto'
  }
});

export default ({ data }) => {
  const fact = data.markdownRemark;
  const relatedFactEdges = data.allMarkdownRemark.edges
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={fact.frontmatter.title} />
      <div className={classes.pageWidth}>
        <LargeFactCard 
          className={classes.card} 
          factTitle={fact.frontmatter.title} 
          factImage={fact.frontmatter.image} 
          factSource={fact.frontmatter.source} 
          factCategory={fact.frontmatter.category} 
          factHTML={fact.html} 
        />
        <h2>Related Facts</h2>
        {relatedFactEdges.map(({ node }, index) => {
          return (
            <HorizontalFactCard
              key={index}
              factTitle={node.frontmatter.title}
              factSlug={node.fields.slug} 
              factImage={node.frontmatter.image} 
              factExcerpt={node.excerpt}
            />
          )
        })}
      </div>
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
    allMarkdownRemark(limit: 3, filter: {fileAbsolutePath: {in: $relatedFactPaths }}, sort: {fields: [fields___relatedFileAbsolutePaths]}) {
      edges {
        node {
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            title
            image {
              src {
                childImageSharp {
                  fixed(width: 100, height: 100) {
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
  }
`
