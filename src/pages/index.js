import React from "react"
import { Link } from "gatsby-theme-material-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  homepage: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '100%'
  },
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.homepage}>
        <Layout>
          <SEO title="Home" />
          <h1>Welcome to Pollinator Facts</h1>
          <p>This site will be an educational resource with various facts about pollinators.</p>
          <p>It is currently a work in progress. This homepage is temporary.</p>
          <p><Link to="/facts">View the list of facts</Link></p>
        </Layout>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
