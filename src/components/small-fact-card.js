import React from 'react'
import Img from 'gatsby-image'
import { makeStyles } from "@material-ui/core/styles"
import { CardActionArea } from 'gatsby-theme-material-ui'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	actionArea: {
		height: '100%'
	}
});

export default function SmallFactCard({className, slug, title, category, image}) {
    const classes = useStyles();
    return (
        <>
        <Card className={className}>
            <CardActionArea className={classes.actionArea} to={slug}>
                <CardMedia
                    component={Img}
                    fixed={image.src.childImageSharp.fixed}
                    alt={image.alt}
                />
                <CardContent>
                    <Typography variant="overline"> {`${category} fact`} </Typography>
                    <Typography gutterBottom variant="h5" component="h2"> {title} </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}
