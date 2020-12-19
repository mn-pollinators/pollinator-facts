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
  featuredTitle: {
    margin: '12px 0'
  },
  cards: {
    display: 'flex',
    margin: '12px -16px',
    overflowX: 'auto',
    '@media screen and (min-width: 600px)': {
      overflowX: 'hidden',
      margin: '12px 0px',
    }
  },
  factCard: {
    minWidth: '190px',
    margin: '8px',
    '&:first-child': {
      marginLeft: '16px',
      '@media screen and (min-width: 600px)': {
        marginLeft: '0px',
      }
    }
  },
  finalFactCard: {
    paddingRight: '16px'
  },
  heroWrapper: {
    height: '400px',
    width: '100%',
    borderStyle: 'solid',
    marginTop: '20px',
  },
  heroImage: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    position: 'static',
    filter: 'blur(3px) opacity(70%)',
  },
  heroText: {
    height: '400px',
    width: '100%',
    position: 'absolute',
    zIndex: '1'
  },
  heroTopText: {
    padding: '50px',
    '@media screen and (max-width: 410px)': {
      fontSize: '3rem'
    }
  }
});

const IndexPage = ({data: { featuredFacts: { edges }, hill }}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homepage}>
        <Layout>
          <SEO title="Home" />
          <div className= {classes.heroText}>
            <Typography variant="h2" className={classes.heroTopText}>Welcome to Pollinator Facts</Typography>
          </div>
          <div className={classes.heroWrapper}>
            <BackgroundImage
              className={classes.heroImage}
              fluid={hill.childImageSharp.fluid}
            >
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
      fluid(quality: 70, maxWidth: 400){
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
