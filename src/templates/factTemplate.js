import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeFactCard from "../components/large-fact-card"
import ListView from "../components/list-view"


const useStyles = makeStyles({
  card: {
    marginTop: 32,
  },
  pageWidth: {
    maxWidth: 520,
    margin: 'auto'
  },
  relatedFactsTitle: {
    marginTop: '16px'
  },
  relatedFactList: {
    paddingBottom: '16px'
  }
});

export default ({ data }) => {
  const fact = data.markdownRemark;
  const relatedFactPaths = data.markdownRemark.fields.relatedFileAbsolutePaths.slice(0, 3);
  const relatedFactEdges = data.relatedFacts.edges;
  const relatedFacts = relatedFactPaths.map(path => relatedFactEdges.find(({ node }) => node.fileAbsolutePath === path));
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
          factTags={fact.frontmatter.tags}
          factHTML={fact.html}
        />
        <Typography variant="h6" component="h3" className={classes.relatedFactsTitle}>Related Facts</Typography>
        <ListView listData={relatedFacts} listStyles={classes.relatedFactList} />
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
        tags
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
      fields {
        relatedFileAbsolutePaths
      }
    }
    relatedFacts: allMarkdownRemark(filter: {fileAbsolutePath: {in: $relatedFactPaths }}) {
      edges {
        node {
          fileAbsolutePath
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
