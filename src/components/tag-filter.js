import React from 'react';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';

export default function TagFilter({ allTags }) {

  const [selectedTags, addToSelected] = React.useState([]);

  const handleClick = (singleTag) => {
    if (selectedTags.includes(singleTag)) {
      addToSelected(selectedTags.filter(tag => tag != singleTag));
    } else {
      addToSelected(selectedTags.concat(singleTag));
    }
  };

  function changeStyle(singleTag, selectedTags) {
    return {
      backgroundColor:
        selectedTags.indexOf(singleTag) === -1 ? '#e0e0e0' : '#4CAF50',
    };
  }

  return (
    <List component="nav">
      {allTags.map((singleTag, index) => (
        <Chip
          size="small"
          key={index}
          label={singleTag}
          clickable={true}
          onClick={() => handleClick(singleTag)}
          style={changeStyle(singleTag, selectedTags)}
        />
      ))}
    </List>
  )
}