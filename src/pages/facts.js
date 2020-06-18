import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyLink } from "gatsby-theme-material-ui"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Img from "gatsby-image"
import Typography from '@material-ui/core/Typography';
import { makeStyles, Divider } from "@material-ui/core"

  export const useStyles = makeStyles({
  background: {
  backgroundColor: '#ffd54f',
  margin: '15px',
  },
  divider: {
  backgroundColor: 'black',
  paddingTop: '25px',
  marginRight: '10px',

  }
  })
const Facts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const classes = useStyles();
  return (
  <Layout>
    <SEO title="All Facts" />
    <Typography variant="h4" component="h1">
          Facts
    </Typography>
    <List component="nav">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, image } = node.frontmatter
          return (

            <ListItem className={classes.background}button component={GatsbyLink} to={slug} key={node.id}>
              <ListItemAvatar>
                <Avatar variant="rounded" fixed={image.src.childImageSharp.fixed} component={Img} />
              </ListItemAvatar>
              <Divider orientation="vertical" flexItem="true" className={classes.divider}/>
              <ListItemText primary={title} secondary={node.excerpt}/>
            </ListItem>
          )
        })}
    </List>
  </Layout>
  )
}

export default Facts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            title
            image {
              src {
                  childImageSharp {
                    fixed(width: 40, height: 40) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
              }
            }
          }
        }
      }
    }
  }
`
