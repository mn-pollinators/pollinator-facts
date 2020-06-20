import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const citationStyles = makeStyles(theme => ({
  section1: {
    marginBottom: theme.spacing(2)
  },
  section2: {
    marginTop: theme.spacing(2)
  },
}));

export default function CitationContainer({factSource, factImage}) {

  const theme = useTheme();
  const citationClasses = citationStyles(theme);

  return (
    <MuiDialogContent>
      <div className={citationClasses.section1}>
        <Typography gutterBottom>
          Fact text adapted from: <a href={factSource?.url}>{factSource?.name}</a>
        </Typography>
      </div>
      <Divider  />
      <div className={citationClasses.section2}>
        <Typography gutterBottom>
          <a href={factImage?.url}>{factImage?.alt}</a> image by {factImage?.creator}
        </Typography>
        <Typography gutterBottom>
          Licensed under {factImage?.license}
        </Typography>
      </div>
    </MuiDialogContent>
  )
}
