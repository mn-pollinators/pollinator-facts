import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles"
import "../pages/page-4.css"

const useStyles = makeStyles({
  factCard: {
    width: '190px',
    margin: '10px',
  }
});

const  FourthPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Page four" />
      <Grid className="smallScreen" container flexWrap="wrap" direction="row" spacing={1} >
      {edges.map(({ node }) => (
            <SmallFactCard
              key={node.id}
              className={classes.factCard}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              category={node.frontmatter.category}
              image={node.frontmatter.image}
            />
          ))}
      </Grid>
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









