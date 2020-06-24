
import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const tagStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

export default function Tags ({factTags}) {

  const classes = tagStyles();
  return (
    <div className={classes.root}>
    <Chip
      size="medium"
      label={factTags}
      // onClick={handleClick}
      color="secondary"

    />
  </div>

  )

}
