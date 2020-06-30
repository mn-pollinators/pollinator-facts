import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { GatsbyLink } from "gatsby-theme-material-ui"

const tagStyles = makeStyles({
  tag: {
    backgroundColor: '#D3D3D3',
    margin: '5px'
  }
});

export default function Tag({tagLabel}) {
  const classes = tagStyles();
  return (
      <Chip
        className={classes.tag}
        size="small"
        label={tagLabel}
        component={GatsbyLink}
        to={`/tags/${tagLabel}`}
        clickable={true}
      />
  )

}
