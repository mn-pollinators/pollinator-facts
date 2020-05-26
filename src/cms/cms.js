import React from 'react'
import CMS from "netlify-cms-app"
import LargeFactCard from "../components/large-fact-card"
import { makeStyles } from '@material-ui/core/styles';
import injectStyle from './injectStyle';

const factPageStyles = makeStyles({
  card: {
    maxWidth: 520,
    marginTop: 20,
    margin: 'auto',
  },
});

const FactPagePreview = ({ entry, widgetFor, getAsset }) => {

  const classes = factPageStyles();

  const factImg = {
    src: {
      childImageSharp: {
        fluid: {
          src: getAsset(entry.getIn(['data','image','src']))
        }
      },
      alt: entry.getIn(['data','image','alt']),
      creator: entry.getIn(['data','image','creator']),
      license: entry.getIn(['data','image','license']),
      url: entry.getIn(['data','image','url'])
    }
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
    </>
  )
}

CMS.registerPreviewTemplate('facts', injectStyle(FactPagePreview));
