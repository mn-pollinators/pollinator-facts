import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const About = ({ data: { enrtfLogo, dynamicUsers } }) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="About" />
      {/* Our Mission */}
      <Typography variant="h2"> Our Mission </Typography>
      {/* U of M (Not sure if we need this)*/}

      {/* Acknowledge ENTRF funding */}
      <Card className={classes.card}>

        <Typography>
          Funding for this project was provided by the Minnesota Environment and Natural Resources
          Trust Fund as recommended by the Legislative-Citizen Commission on Minnesota Resources (LCCMR)
          The Trust Fund is a permanent fund constitutionally established by the citizens of Minnesota to
          assist in the protection, conservation, preservation, and enhancement of the state’s air, water, land,
          fish, wildlife, and other natural resources.
          Currently 40% of net Minnesota State Lottery proceeds are dedicated to growing the Trust Fund
          and ensuring future benefits for Minnesota’s environment and natural resources.
        </Typography>

        <CardMedia
          component={Img}
          fixed={enrtfLogo.childImageSharp.fixed}
          alt="ENRTF Logo"
          title="ENRTF Logo"
        />

      </Card>

      <List component="nav">
        {dynamicUsers.nodes.map((contributor) => {
          return (
            <ListItem  button component="a" href={contributor.htmlUrl} key={contributor.login}>
              <ListItemText primary={contributor.name? contributor.name : contributor.login}/>
            </ListItem>
          )
        })}
      </List>

    </Layout>
  )
}

export default About;

export const aboutQuery = graphql`
query {
  enrtfLogo: file(relativePath: { eq: "enrtf_logo.png" }) {
    childImageSharp {
			fixed(width: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
    }
  }
  dynamicUsers: allGitHubContributor(sort: {fields: contributions, order: DESC}, filter: {login: {ne: "dependabot-preview[bot]"}}) {
    nodes {
      login
      name
      htmlUrl
      avatarUrl
    }
  }
}`
