import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import SmallFactCard from '../components/small-fact-card'
import { Container } from "@material-ui/core"

const useStyles = makeStyles({

  sectionHeader: {
    margin: '16px 0px',
  },
  section: {
    '@media screen and (min-width: 600px)': {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
    }
  },
  text: {
    gridColumn: '1/1',
  },
  factCards: {
    width: '190px',
    margin: '16px auto',
    display: 'block',
    '@media screen and (min-width: 600px)': {
      gridColumns: '2/2',
      marginTop: '8px',
      marginLeft: '8px'
    }
  },

});

const ArticleOne = ({ data: { allMarkdownRemark: { edges } } }) => {
  const classes = useStyles();
  const cavity = edges[0];
  const meadow = edges[1];
  const ground = edges[2];
  const milkweed = edges[3];
  return (

    <Layout>
      <Container maxWidth="sm">
        <SEO title="How we can help Pollinators" />

        <Typography variant="h4" component="h2" className={classes.pageHeader}>How we can help Pollinators</Typography>

        <div className={classes.section}>

          <Typography variant="h5" component="h5" className={classes.sectionHeader}>Plant a Pollinator Garden</Typography>
          <Typography className={classes.text}>
            Pollinators will be able to pollinate year-round if your garden has plants that flower at different times of the year.
            Having perrenial and annual flowers ,that bloom at different times, will help achieve this goal.
            Your garden will better attract pollinators if plants are planted in clumps.
          </Typography>


          <SmallFactCard
            key={meadow.node.id}
            className={classes.factCards}
            slug={meadow.node.fields.slug}
            title={meadow.node.frontmatter.title}
            image={meadow.node.frontmatter.image}
          />

          <Typography className={classes.text}>
            A variety of <Link to="/tags/flowers">flower</Link> colors and shapes will help your garden attract different pollinators.
            Choosing native plants for your garden will attract more native pollinators and provide larval host plants for certain species of pollinators.
            Milkweed provides food for caterpillars. Consider planting <Link to="/f/milkweed">milkweed</Link> in your garden if monarch butterflies live near you.
          </Typography>

          <SmallFactCard
            key={milkweed.node.id}
            className={classes.factCards}
            slug={milkweed.node.fields.slug}
            title={milkweed.node.frontmatter.title}
            image={milkweed.node.frontmatter.image}
          />

          <Typography variant="h5" component="h5" className={classes.sectionHeader}> Provide Nesting Habitat </Typography>
          <Typography className={classes.text} >
            Considering keeping an undisturbed, well-drained patch of ground to provide a <Link to="/f/ground-nesting-bees">ground nesting site for bees</Link> in your garden.
            Facing it south will help provide the most sunlight and prevent inundating the site with sprinkler water.
          </Typography>


          <SmallFactCard
            key={ground.node.id}
            className={classes.factCards}
            slug={ground.node.fields.slug}
            title={ground.node.frontmatter.title}
            image={ground.node.frontmatter.image}
          />

          <Typography className={classes.text}>
            You can provide <Link to="/f/cavity-nesting-bees">wood nesting sites</Link> in your garden in a few ways: Leaving a dead tree or limb undisturbed, cutting hollow or soft stems back to a foot in height while pruning shrubs and providing artificial nesting sites.
            Recent research has shown that artificial nesting sites can provide habitat for non-native species, increasing parasitism. Having inner paper lining and replacing it annually is also important for preventing disease spread. Consider this if using artificial nesting sites in your garden.
          </Typography>


          <SmallFactCard
            key={cavity.node.id}
            className={classes.factCards}
            slug={cavity.node.fields.slug}
            title={cavity.node.frontmatter.title}
            image={cavity.node.frontmatter.image}
          />


          <Typography variant="h5" component="h5" className={classes.sectionHeader}> Avoid or Limit Pesticide Use </Typography>
          <Typography className={classes.text}>
            Try to avoid or limit use of pesticides in your garden. Pesticides can kill pollinators for several days after application and can worsen pest problems by killing natural predators.
            Rather than resorting to pesticides, try removing individual pests and encouraging natural predators with diverse plants. Always expect and accept some pest activity in your garden
          </Typography>

        </div>
      </Container>
    </Layout>
  )
}
export default ArticleOne

export const articleOneQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {title: {in: ["Milkweed","Ground Nesting Bees","Cavity Nesting Bees", "Meadow Blazingstar"]}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          image {
            src {
              childImageSharp {
                fixed(width: 190, height: 150, quality: 70) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}`
