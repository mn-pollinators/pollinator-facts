import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"
import { homeQuery, useStyles } from "../pages/index"


const SecondPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Page two" />
      
      <section className={classes.cards}>
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
      </section>
      
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage