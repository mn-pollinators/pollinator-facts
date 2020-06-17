import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

export const useStyles = makeStyles({
  cards: {
    display: 'flex',
    overflowX: 'auto',
    margin: '50px 0'
  },
  factCard: {
    minWidth: '190px',
    margin: '5px'
  },
  '@media screen and (min-width: 768px)': {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '100px'
      },
      '*::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px gray',
        borderRadius: '10px'
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#4caf50',
        borderRadius: '10px'
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: 'green'
      }
    }
  }
});

const IndexPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />

      <section className={classes.cards}>
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
      </section>

      <section style={{ display:'flex', justifyContent:'space-between'}} >
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/page-3/">Go to page 3</Link>
        <Link to="/page-4/">Go to page 4</Link>
      </section>

    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
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
