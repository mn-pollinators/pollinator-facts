import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyLink } from "gatsby-theme-material-ui"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Img from "gatsby-image"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ToggleLayout from '../components/toggle-layout'

export default ({ pageContext, data }) => {
	const { tag } = pageContext
	const useStyles = makeStyles({
		title: {
			marginTop: 16
		},
		capitalize: {
			textTransform: "capitalize"
		}
	});

	const { edges } = data.allMarkdownRemark
	const classes = useStyles();
	return (
		<Layout>
			<SEO title={tag} />
			<ToggleLayout title={`${tag} facts`} factsData={edges} titleStyle={classes.capitalize} />
		</Layout>
	)
}

export const tagQuery = graphql`
query($tag: String!) {
  allMarkdownRemark(filter: {frontmatter: {tags: {elemMatch: {name: {in: [$tag] }}}}}) {
		totalCount
    edges {
			node {
				id
				excerpt(pruneLength: 50)
				fields {
					slug
				}
				frontmatter {
					title
					image{
						src{
							childImageSharp{
								listImage: fixed(width: 40, height: 40, quality: 70) {
									...GatsbyImageSharpFixed_withWebp
								}
								fixed(width: 190, height: 150, quality: 70){
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