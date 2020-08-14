import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import Typography from '@material-ui/core/Typography';
import BackgroundImage from "gatsby-background-image"

export const useStyles = makeStyles({
  cards: {
    display: 'flex',
    margin: '12px 0px',
    overflowX: 'auto',
    '@media screen and (min-width: 600px)': {
      overflowX: 'hidden',
    },
  },
  featuredTitle: {
    margin: '12px 0'
  },
  factCard: {
    minWidth: '190px',
    margin: '8px',
    '&:first-child': {
      marginLeft: '0',
    },
    '&:last-child': {
      marginRight: '0',
    },
  },
  heroImage: {
    height: '400px',
    width: '100%',
    marginTop: '20px',
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    position: 'static',
    filter: 'blur(3px) opacity(70%)',
  },
  heroText: {
    height: '400px',
    maxWidth: '800px',
    position: 'absolute',
    zIndex: '1',
  },
  heroTopText: {
    padding: '50px',
    '@media screen and (max-width: 600px)': {
      fontSize: '2rem'
    }
  },
  heroBottomText: {
    padding: '50px',
    paddingTop: '0px',
    '@media screen and (max-width: 600px)': {
      fontSize: '1rem'
    }
  }
});

const IndexPage = ({data: { featuredFacts: { edges }, hill }}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <div className= {classes.heroText}>
        <Typography variant="h2" className={classes.heroTopText}>Welcome to <br></br> Pollinator Facts</Typography>
        {/* <Typography variant="h6" className={classes.heroBottomText}>You won't believe your eyes when you see the pollinator facts we have! Don't forget
          to like, subscribe and hit that bell icon to never miss an upload.
        </Typography> */}
      </div>
      <BackgroundImage
          className={classes.heroImage}
          fluid={hill.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
      </BackgroundImage>

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
      </section>


      {/* <section style={{ display:'flex', justifyContent:'space-between'}} >
      </section> */}

    </Layout>
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
