import React from "react"
import { Link } from "gatsby-theme-material-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Pollinator Facts</h1>
    <p>This site will be an educational resource with various facts about pollinators.</p>
    <p>It is currently a work in progress. This homepage is temporary.</p>
    <p><Link to="/facts">View the list of facts</Link></p>

    <a href="https://www.netlify.com">
      <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
    </a>
  </Layout>
)

export default IndexPage
