import React from "react"
import Img from "gatsby-image"

import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, IconButton } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import FactInfoContent from '../components/fact-info-content'
import Tag from '../components/tag'

const factCardStyles = makeStyles({
  media: {
    height: 250,
  },
  overline: {
    lineHeight: 0,
  },
  body: {
   "& p": {
    margin: 0,
   },
  },
  visible: {
    marginBottom: '10px',
    '@media screen and (max-width: 600px)': {
    display: 'none',
    }
  },

  hidden: {
    display: 'none',
    '@media screen and (max-width: 600px)': {
    display: 'block',
    }
  }
});

export default function LargeFactCard({factTitle, factImage, factSource, factHTML, className, factTags}) {

  const classes = factCardStyles();

  function shareClick() {
    navigator.share({
      title: factTitle,
      text: `Check out this ${factTitle} pollinator fact!`,
      url: window.location.href,
    })
  }

  const isSSR = typeof window === "undefined"

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card className={classes.root, className}>

      <CardMedia
        className={classes.media}
        component={Img}
        fluid={factImage.src.childImageSharp.fluid}
        alt={factImage.alt}
      />
      <CardContent>

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

      <div className={classes.hidden}>
        {factTags.map((factTag, index) => (
          <Tag key={index} tagLabel={factTag.name} />

        ))}
        </div>

      <CardActions disableSpacing>
        <Grid justify="space-between" container alignItems="flex-end">
        <div className={classes.visible}>
        <Grid item>
        {factTags.map((factTag, index) => (
          <Tag key={index} tagLabel={factTag.name} />

        ))}

        </Grid>
        </div>
        <Grid item>
        {!isSSR && navigator.share &&
              <IconButton aria-label="share" onClick={shareClick}>
                <ShareIcon/>
              </IconButton>
            }
        </Grid>
          <Grid item>

            <IconButton aria-label="fact info" onClick={handleDialogClickOpen}>
              <InfoOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    <FactInfoDialog open={dialogOpen} onClose={handleDialogClose} factSource={factSource} factImage={factImage}/>
    </>
    )
}

const dialogStyles = makeStyles(theme => ({
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
}));


function FactInfoDialog(props) {

  const theme = useTheme();
  const classes = dialogStyles(theme);
  const { onClose, open, factSource, factImage } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogTitle disableTypography className={classes.title}>
          <Typography variant="h6">About Fact</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <FactInfoContent factSource={factSource} factImage={factImage}/>
      </Dialog>
    </div>
  );
}
