import React from 'react'
import CMS from "netlify-cms-app"
import LargeFactCard from "../components/large-fact-card"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import injectStyle from './injectStyle';

import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const factPageStyles = makeStyles({
  card: {
    maxWidth: 520,
    marginTop: 20,
    margin: 'auto',
  },
});


const citationStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 520,
    margin: '20px auto',
  },
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  section1: {
    marginBottom: theme.spacing(2),
  },
  section2: {
    marginTop: theme.spacing(2),
  },
}));

const FactPagePreview = ({ entry, widgetFor, getAsset }) => {

  const classes = factPageStyles();
  const theme = useTheme();
  const citationClasses = citationStyles(theme);

  const factImg = {
    src: {
      childImageSharp: {
        fluid: {
          src: getAsset(entry.getIn(['data','image','src']))
        }
      }
    },
    alt: entry.getIn(['data','image','alt']),
    creator: entry.getIn(['data','image','creator']),
    license: entry.getIn(['data','image','license']),
    url: entry.getIn(['data','image','url'])
  }

  return (
    <>
          <LargeFactCard
          className={classes.card}
          factTitle={entry.getIn(['data','title'])}
          factImage={factImg}
          factSource={entry.getIn(['data','source'])}
          factCategory={entry.getIn(['data','category'])}
          factHTML={entry.getIn(['data','body'])}
          />

          <Paper raised className={citationClasses.paper}>
            <MuiDialogTitle disableTypography className={citationClasses.title}>
              <Typography variant="h6">About Fact</Typography>
            </MuiDialogTitle>
            <MuiDialogContent>
            <div className={citationClasses.section1}>
              <Typography gutterBottom>
                Fact text adapted from: <a href={entry.getIn(['data','source','url'])}>{entry.getIn(['data','source','name'])}</a>
              </Typography>
            </div>
            <Divider  />
            <div className={citationClasses.section2}>
              <Typography gutterBottom>
                <a href={factImg.url}>{factImg.alt}</a> image by {factImg.creator}
              </Typography>
              <Typography gutterBottom>
                Licensed under {factImg.license}
              </Typography>
            </div>
            </MuiDialogContent>
          </Paper>
    </>
  )
}

CMS.registerPreviewTemplate('facts', injectStyle(FactPagePreview));
