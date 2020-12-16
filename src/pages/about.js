import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
  aboutPage: {
    display: 'grid',
    placeItems: 'center',
    gridTemplateRows: '1fr auto',
    gridTemplateColumns: '100%'
  },
  aboutCards: {
    maxWidth: '800px',
    margin: '16px',
    '& .MuiCard-root:not(:last-child)': {
      marginBottom: '16px'
    }
  },
  enrtf: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px -8px -8px',
    '& > *': {
      margin: '8px'
    },
  },
  media: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  enrtfText: {
    minWidth: '60%',
    flex: 1
  }
});


const About = ({ data: { enrtfLogo, dynamicUsers } }) => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="About" />
      <div className={classes.aboutPage}>
        <div className={classes.aboutCards}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">Minnesota Pollinators</Typography>
              <Typography>
                Minnesota Pollinators is an organization of <a href="https://morris.umn.edu/">University of Minnesota Morris</a> students and faculty
                working on projects that help the native pollinators of Minnesota.
                This project is part of a <a href="https://wcroc.cfans.umn.edu/restoring-native-prairie">grant-funded project</a> to restore native prairie
                on a site in Morris, MN and help people learn about pollinators and the native prairie plants that support them.
              </Typography>
            </CardContent>
            <CardActions>
              <Button startIcon={<GitHubIcon />} href="https://github.com/mn-pollinators" >
                Github
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">Contributors</Typography>

              <List component="nav">
                {dynamicUsers.nodes.map((contributor) => {
                  const displayName = contributor.name?? contributor.login;
                  return (
                    <ListItem button component="a" href={contributor.htmlUrl} key={contributor.login}>
                      <ListItemAvatar>
                        <Avatar alt={displayName} src={contributor.avatarUrl} />
                      </ListItemAvatar>
                      <ListItemText primary={displayName}/>
                    </ListItem>
                  )
                })}
              </List>

            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">Funding</Typography>

              <div className={classes.enrtf}>

                <CardMedia
                  className={classes.media}
                  component={Img}
                  fixed={enrtfLogo.childImageSharp.fixed}
                  alt="ENRTF Logo"
                  title="ENRTF Logo"
                />

                <div className={classes.enrtfText}>
                  <Typography paragraph>
                    Funding for this project was provided by the Minnesota Environment and Natural Resources Trust Fund as recommended
                    by the <a href="https://www.lccmr.leg.mn/">Legislative-Citizen Commission on Minnesota Resources (LCCMR)</a>
                  </Typography>
                  <Typography>
                    The Trust Fund is a permanent fund constitutionally established by the citizens of Minnesota to assist in the
                    protection, conservation, preservation, and enhancement of the state’s air, water, land, fish, wildlife, and
                    other natural resources. Currently 40% of net Minnesota State Lottery proceeds are dedicated to growing
                    the Trust Fund and ensuring future benefits for Minnesota’s environment and natural resources.
                  </Typography>
                </div>

              </div>

            </CardContent>
          </Card>
        </div>
      </div>

    </Layout>
  )
}

export default About;

export const aboutQuery = graphql`
query {
  enrtfLogo: file(relativePath: { eq: "enrtf_logo.png" }) {
    childImageSharp {
			fixed(width: 180) {
				...GatsbyImageSharpFixed_withWebp
			}
    }
  }
  dynamicUsers: allGitHubContributor(sort: {fields: contributions, order: DESC}, filter: {login: {ne: "dependabot-preview[bot]"}}) {
    nodes {
      login
      name
      htmlUrl
      avatarUrl
    }
  }
}`
