import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import gatsbyIcon from "../images/gatsby-icon.png"

export const useStyles = makeStyles({
  cards: {
    display: 'flex',
    margin: '50px 0',
    overflowX: 'auto',
    '@media screen and (min-width: 600px)': {
      overflowX: 'hidden',
    }
  },
  factCard: {
    minWidth: '190px',
    margin: '5px',
  },
  heroImage: {
    backgroundImage: 'url(${gatsbyIcon})',
    height: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  }
});

const IndexPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.heroImage}>
        <div class="heroText">
          <h1>Welcome to Pollinator Facts</h1>
          <p>We have so many amazing bee facts. You simply won't believe your eyes. But before we get into the facts, don't forget to hit that like and subscribe button and click the bell.</p>
        </div>
      </div>
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
      </section>

      <section style={{ display:'flex', justifyContent:'space-between'}} >
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
