import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { GatsbyLink } from 'gatsby-theme-material-ui';

export default function BottomBar({ className }) {

	return (
		<StaticQuery
			query={graphql`
				query {
					enrtfLogo: file(relativePath: { eq: "enrtf_logo.png" }) {
						childImageSharp {
							fixed(width: 100) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			`}
			render={data => (
				<div  className={className}>
					<Img title="ENRTF Logo" alt="ENRTF Logo" fixed={data.enrtfLogo.childImageSharp.fixed} />
					<a href="https://www.netlify.com">
						<img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
					</a>
				</div>
			)}
		/>
	);
}