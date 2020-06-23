import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles"
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles({
  factCard: {
    width: '190px',
    margin: '10px',
  },
  toggleButtons: {
    margin: '5px'
  }
});

const GridFacts = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Grid Facts"/>
      <ToggleButtonGroup  exclusive className={classes.toggleButtons}>
        <Link to="/facts">
          <ToggleButton value="list" aria-label="list">
              <ViewListIcon/>
          </ToggleButton>
        </Link>
        <Link to="/grid-facts">
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon/>
          </ToggleButton>
        </Link>
      </ToggleButtonGroup>

      <Grid container flexWrap="wrap" direction="row" spacing={1} >
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
      <Link to="/facts">Go back to the list of facts</Link>
    </Layout>
  )
}

export default GridFacts

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


