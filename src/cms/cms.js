import React from 'react'
import CMS from "netlify-cms-app"
import { LargeFactCard } from "../components/large-fact-card"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    media: {
      height: 250,
    },
    overline: {
      lineHeight: 0,
    },
    body: {
     "& p": {
      margin: 0
     }
    }
});

const classes = useStyles();

const FactPagePreview = ({ entry, widgetFor }) => (
    <LargeFactCard 
    className={classes.card} 
    factTitle={entry.getIn('data','title')}
    factImage={entry.getIn('data','image')}
    factSource={entry.getIn('data','source')}
    factCategory={entry.getIn('data','category')}
    factHTML={widgetFor('body')}
    />
)

CMS.registerPreviewTemplate('facts', FactPagePreview)