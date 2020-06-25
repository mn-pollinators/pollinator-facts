
import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


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

const handleClick = () => {
};

export default function Tags ({tagLabel}) {

  const classes = tagStyles();
  return (
      <Chip
        className={classes.root, classes.background}
        size="small"
        label={tagLabel}
        onClick={handleClick}
      />
  )

}
