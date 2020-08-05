import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

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
    height: '400px',
    width: '100%',
    marginTop: '30px',
    backgroundPosition: 'top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    position: 'relative',
    filter: 'blur(8px)',
  },
  heroTopText: {
    padding: '50px',
    '@media screen and (max-width: 600px)': {
      fontSize: '2rem'
    }
  },
  heroBottomText: {
    padding: '50px',
    '@media screen and (max-width: 600px)': {
      fontSize: '1rem'
    }
  }
});

const IndexPage = ({data: { allFacts: { edges }, hill }}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
          //Tag="section"
          className={classes.heroImage}
          fluid={hill.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <Typography variant="h2" className={classes.heroTopText}>Welcome to <br></br> Pollinator Facts</Typography>
          <Typography variant="h6" className={classes.heroBottomText}>You won't believe your eyes when you see the pollinator facts we have! Don't forget
            to like, subscribe and hit that bell icon to never miss an upload.
          </Typography>
        </BackgroundImage>
      {/* <Card>
        <CardMedia
        component={Img}
        fluid={hill.childImageSharp.fluid}
        alt="Hill Image"
        />

      </Card> */}
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


      <section style={{ display:'flex', justifyContent:'space-between'}} >
      </section>

    </Layout>
  )
}

//const imageData = data.solidago.childImageSharp.fluid

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
  allFacts: allMarkdownRemark {
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
