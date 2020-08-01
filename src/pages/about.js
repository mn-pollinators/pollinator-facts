import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexWrap: 'wrap'
  }

});

const About = ({ data: { enrtfLogo } }) => {
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

      {/* Github Link */}
      {/* Link to contributors*/}
      <Typography>
        Thank you for those who&nbsp;
        <a href="https://github.com/mn-pollinators/pollinator-facts/graphs/contributors">contributed</a>
        &nbsp;to the project
      </Typography>

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
}`
