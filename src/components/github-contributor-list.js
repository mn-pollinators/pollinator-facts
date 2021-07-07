import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export default function GitHubContributorList({contributor}) {
  const displayName = contributor.name?? contributor.login;
  const url = contributor.url?? contributor.htmlUrl
  const avatar = contributor.avatarUrl;
  return (
    <ListItem button component="a" href={url}>
      <ListItemAvatar>
        <Avatar alt={displayName} src={`${avatar}&size=40`} srcSet={`${avatar}&size=80 2x, ${avatar}&size=160 4x`} />
      </ListItemAvatar>
      <ListItemText primary={displayName}/>
    </ListItem>
  )
}
