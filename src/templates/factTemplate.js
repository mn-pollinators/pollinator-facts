import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import LargeFactCard from "../components/large-fact-card"


const useStyles = makeStyles({
  card: {
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
        factCategory={fact.frontmatter.category} 
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
        category
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