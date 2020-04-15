import React from "react"
import Img from "gatsby-image"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, IconButton } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';


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

export default function LargeFactCard({factTitle, factImage, factSource, factHTML, className, factCategory}) {
  
  const classes = useStyles();
  
  function shareClick() {
    navigator.share({
      title: factTitle,
      text: `Check out this ${factTitle} pollinator fact!`,
      url: window.location.href,
    })
  }

  const isSSR = typeof window === "undefined"
  
  return (
    // <div>
    //     <h1>{factTitle}</h1>
    //    <Img fluid={factImage.src.childImageSharp.fluid}/>
    //     <div dangerouslySetInnerHTML={{ __html: factHTML }} />
    // </div>
    <>
    <Card className={classes.root, className}>
      
      <CardMedia
        className={classes.media}
        component={Img}
        fluid={factImage.src.childImageSharp.fluid}
        alt={factImage.alt}
      />
      <CardContent>
        <Typography variant="overline" className={classes.overline}>{factCategory} fact</Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {factTitle}
        </Typography>
        <Typography 
          className={classes.body} 
          variant="body2" 
          color="textPrimary" 
          component="div" 
          dangerouslySetInnerHTML={{ __html: factHTML }}
        />
      </CardContent>
      
      <CardActions disableSpacing>
        <Grid justify="space-between" container alignItems="flex-end">
          <Grid item>
            <Button color="primary" href={factSource ? factSource.url : '#'} rel="noopener noreferrer" target="_blank">
              Source
            </Button>
          </Grid>
            {!isSSR && navigator.share && 
              <Grid item>
                <IconButton aria-label="share" onClick={shareClick}>
                  <ShareIcon />
                </IconButton>
              </Grid>
            }
        </Grid>
      </CardActions>
    </Card>
    </>
    )
  }