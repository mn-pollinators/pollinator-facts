import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Img from "gatsby-image"
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.action.disabledBackground,
    height: '80px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
				query {
					enrtfLogo: file(relativePath: { eq: "enrtf_logo.png" }) {
						childImageSharp {
							fixed(height: 50, quality: 70) {
								...GatsbyImageSharpFixed_noBase64
							}
						}
					}
				}
			`}
      render={data => (
        <div className={classes.footer}>
          <Container maxWidth="lg" className={classes.container}>
            <Img title="ENRTF Logo" alt="ENRTF Logo" fixed={data.enrtfLogo.childImageSharp.fixed} />
            <a href="https://www.netlify.com">
              <img title="Netlify Logo" src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
            </a>
          </Container>
        </div>
      )}
    />
  );
}
