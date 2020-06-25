import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { GatsbyLink } from "gatsby-theme-material-ui"

const tagStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    margin: '5px'
  },
  background: {
    backgroundColor: '#D3D3D3'
  }
});

export default function Tag({tagLabel}) {
  const classes = tagStyles();
  return (
      <Chip
        className={classes.root, classes.background}
        size="small"
        label={tagLabel}
        component={GatsbyLink} 
        to={`/tags/${tagLabel}`}
      />
  )

}
