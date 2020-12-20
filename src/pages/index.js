import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import Typography from '@material-ui/core/Typography';
import BackgroundImage from "gatsby-background-image"

export const useStyles = makeStyles({
  homepage: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '100%'
  },
  imageWrapper: {
    width: '100%',
    height: '400px',
    display: 'flex',
    overflow: 'hidden',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
  },
  textWrapper: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  featuredTitle: {
    margin: '12px 0'
  },
  cards: {
    display: 'flex',
    margin: '12px -16px',
    overflowX: 'auto',
    '@media screen and (min-width: 1260px)': {
      overflowX: 'hidden',
      margin: '12px 0px',
    }
  },
  factCard: {
    minWidth: '190px',
    margin: '8px',
    '&:first-child': {
      marginLeft: '16px',
      '@media screen and (min-width: 1260px)': {
        marginLeft: '0px',
      }
    }
  },
  finalFactCard: {
    paddingRight: '16px'
  }
});

const IndexPage = ({data: { featuredFacts: { edges }, hill }}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homepage}>
        <Layout>
          <SEO title="Home" />
          <div className={classes.imageWrapper}>
            <BackgroundImage
              Tag="section"
              className={classes.image}
              fluid={hill.childImageSharp.fluid}
              title="The Hill"
              aria-label="Hill drawing"
            >
              <div className={classes.textWrapper}>
                <Typography variant="h2">Welcome to Pollinator Facts</Typography>
              </div>
            </BackgroundImage>
          </div>


          <Typography className={classes.featuredTitle} variant="h4" component="h4">Featured Facts</Typography>
          <section className={classes.cards}>
            {edges.map(({ node }) => (
              <SmallFactCard
                key={node.id}
                className={classes.factCard}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                image={node.frontmatter.image}
              />
            ))}
            <div className={classes.finalFactCard}></div>
          </section>
        </Layout>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage

export const homeQuery = graphql`
query {
  hill: file(relativePath: { eq: "other/hill.jpg"}){
    childImageSharp{
      fluid(quality: 70, maxWidth: 1400){
        ...GatsbyImageSharpFluid
      }
    }
  }
  featuredFacts: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "featured"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          tags
          image {
            src {
              childImageSharp {
                fixed(quality: 90, width: 190, height:150) {
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
