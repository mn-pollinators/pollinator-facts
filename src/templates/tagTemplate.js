import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
	const { edges } = data.allMarkdownRemark
	return (
		<Layout>
			<h1>Facts with a certain tag</h1>
			{edges.map(({ node }) => {
				const { slug } = node.fields
				const { title } = node.frontmatter
				return (
					<li key={slug}>
						<Link to={slug}>{title}</Link>
					</li>
				)
		})}
		</Layout>
	)
}

export const tagQuery = graphql`
query($tag: String!) {
  allMarkdownRemark(filter: {frontmatter: {tags: {elemMatch: {name: {in: [$tag] }}}}}) {
		totalCount
    edges {
			node {
				fields {
					slug
				}
				frontmatter {
					title
				}
			}
		}
	}
}`