import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
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
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={fact.frontmatter.title} />
      <LargeFactCard
        className={classes.card}
        factTitle={fact.frontmatter.title}
        factImage={fact.frontmatter.image}
        factSource={fact.frontmatter.source}
        factTags={fact.frontmatter.tags}
        factHTML={fact.html}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags {
          name
        }
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
  }
`
