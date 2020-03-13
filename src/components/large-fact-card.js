import React from "react"
import Img from "gatsby-image"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 520,
    },
    media: {
      height: 250,
    },
  });

export default function LargeFactCard({factTitle, factImage, factSource, factHTML}) {

    const classes = useStyles();

    return (
       // <div>
       //     <h1>{factTitle}</h1>
        //    <Img fluid={factImage.src.childImageSharp.fluid}/>
       //     <div dangerouslySetInnerHTML={{ __html: factHTML }} />
       // </div>
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                component={Img}
                fluid={factImage.src.childImageSharp.fluid}
                alt="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {factTitle}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" dangerouslySetInnerHTML={{ __html: factHTML }}/>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}