import React from 'react'
import Img from 'gatsby-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


export default function SmallFactCard({title, category, image}) {
    return (
        <>
        <Card>
            <CardMedia
                component={Img}
                fixed={image.src.childImageSharp.fixed}
                alt={image.alt}
            />
            <CardContent>
                <Typography variant="overline"> {`${category} fact`} </Typography>
                <Typography gutterBottom variant="h5" component="h2"> {title} </Typography>
            </CardContent>
        </Card>
        </>
    )
}



