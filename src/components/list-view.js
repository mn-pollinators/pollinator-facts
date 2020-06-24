import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { GatsbyLink } from "gatsby-theme-material-ui"
import Img from "gatsby-image"

export default function ListView({ edges }) {
  return (
    <List component="nav">
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, image } = node.frontmatter
          return (
            <ListItem button component={GatsbyLink} to={slug} key={node.id}>
              <ListItemAvatar>
                <Avatar variant="rounded" fixed={image.src.childImageSharp.listImage} component={Img} />
              </ListItemAvatar>
              <ListItemText primary={title} secondary={node.excerpt}/>
            </ListItem>
          )
        })}
    </List>
  )
}
