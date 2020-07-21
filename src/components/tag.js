import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { GatsbyLink } from "gatsby-theme-material-ui"


export default function Tag({tagLabel}) {

  return (
      <Chip
        size="small"
        label={tagLabel}
        component={GatsbyLink}
        to={`/tags/${tagLabel}`}
        clickable={true}
      />
  )

}
