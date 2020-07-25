import React from 'react';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import { makeStyles } from "@material-ui/core/styles";
import { Context } from './provider';


const useStyles = makeStyles({
  list: {
    margin: '4px',
  },
  chips: {
    marginRight: '4px',
    marginTop: '4px'
  }
});

export default function TagFilter({ title, allTags }) {
  const classes = useStyles();

  return (
    <Context.Consumer>
      {context => (
        <React.Fragment>
          <List component="nav" className={classes.list}>
            {allTags.map((singleTag, index) => (
              <Chip
                size="small"
                key={index}
                color={context.selectedTags.indexOf(singleTag) === -1? 'default': 'primary'}
                label={singleTag}
                clickable={true}
                onClick={() => context.handleClick(singleTag)}
                className={classes.chips}
              />
            ))}
          </List>
        </React.Fragment>
      )}
    </Context.Consumer>
  )
}
