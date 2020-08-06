import React from 'react';
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea } from 'gatsby-theme-material-ui'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  relatedCard: {
    marginBottom: '5px',
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
});

export default function HorizontalFactCard({ factTitle, factSlug, factImage, factExcerpt }) {
  const classes = useStyles();
  return (
    <Card className={classes.relatedCard}>
      <CardActionArea to={factSlug} className={classes.actionArea}>
        <CardMedia
          component={Img}
          fixed={factImage.src.childImageSharp.fixed}
          alt={factImage.alt}
        />

        <CardContent>
          <Typography component="h3" variant="h6">
            {factTitle}
          </Typography>
          <Typography>
            {factExcerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
