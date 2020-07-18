import React from 'react';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Context } from './provider';


const useStyles = makeStyles({
  alignElements: {
    margin: '16px',
  },
  chips: {
    marginRight: '4px',
    marginTop: '4px'
  }
});

export default function TagFilter({ title, allTags }) {
  const classes = useStyles();
  function changeStyle(singleTag, selectedTags) {
    return {
      backgroundColor:
        selectedTags.indexOf(singleTag) === -1 ? '#e0e0e0' : '#4CAF50',
    };
  }

  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <Typography variant="h5" component="h5" className={classes.alignElements}>{title}</Typography>
          <List component="nav"className={classes.alignElements}>  
            {allTags.map((singleTag, index) => (
              <Chip
                size="small"
                key={index}
                label={singleTag}
                clickable={true}
                onClick={() => context.handleClick(singleTag)}
                style={changeStyle(singleTag, context.selectedTags)}
                className={classes.chips}
              />
            ))}
          </List>
        </React.Fragment>
      )}
    </Context.Consumer>
  )
}