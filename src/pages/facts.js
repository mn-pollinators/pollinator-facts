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
import { makeStyles } from '@material-ui/core/styles';
import Tag from '../components/tag'


const useStyles = makeStyles({
  title: {
    marginTop: 16
  },
});

const Facts = ({
  data: {
    allMarkdownRemark: { distinct, edges },
  },
}) => {

  const classes = useStyles();

  return (
  <Layout>
    <SEO title="All Facts"/>
    <Typography variant="h4" component="h1" className={classes.title} >
          Browse
      </Typography>
      <List component="nav">
        {distinct.map((tag, index) => (
          <Tag key={index} tagLabel={tag} />
        ))}
      </List>
    <Typography variant="h4" component="h1" className={classes.title} >
          Facts
    </Typography>
    <List component="nav">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, image } = node.frontmatter
          return (
            <ListItem button component={GatsbyLink} to={slug} key={node.id}>
              <ListItemAvatar>
                <Avatar variant="rounded" fixed={image.src.childImageSharp.fixed} component={Img} />
              </ListItemAvatar>
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
      distinct(field: frontmatter___tags___name)
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            title
            tags {
              name
            }
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
