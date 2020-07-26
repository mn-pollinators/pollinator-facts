import React from 'react'
import CMS from "netlify-cms-app"
import LargeFactCard from "../components/large-fact-card"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import injectStyle from './injectStyle';

import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FactInfoContent from '../components/fact-info-content'

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
  }
}));

const FactPagePreview = ({ entry, widgetsFor, getAsset }) => {

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

  const factSrc = widgetsFor('source').map(source => {
    return ({
      name: source.getIn(['data','name']),
      url: source.getIn(['data','url'])
    })
  })

  const factTags = widgetsFor('tags').map(tag => {
    return (
     tag.getIn(['data']))
  })

  return (
    <>
          <LargeFactCard
          className={classes.card}
          factTitle={entry.getIn(['data','title'])}
          factImage={factImg}
          factSource={factSrc}
          factTags={factTags}
          factHTML={entry.getIn(['data','body'])}
          />

          <Paper raised className={citationClasses.paper}>
            <MuiDialogTitle disableTypography className={citationClasses.title}>
              <Typography variant="h6">About Fact</Typography>
            </MuiDialogTitle>
            <FactInfoContent factSource={factSrc} factImage={factImg} />
          </Paper>
    </>
  )
}

CMS.registerPreviewTemplate('facts', injectStyle(FactPagePreview));
