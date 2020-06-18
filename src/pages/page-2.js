import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { IconButton } from 'gatsby-theme-material-ui';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextOutlined';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../pages/page-2.css"


const useStyles = makeStyles({
  container: {
    position: 'relative',
    margin: '50px 0'
  },
  factCard: {
    width: '190px',
    margin: '5px',
  }
});

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-arrow-prev">
      <IconButton
        className= "arrow-btn prev"
        onClick= {onClick}
      >
        <NavigateBeforeRoundedIcon />
      </IconButton>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-arrow-next">
      <IconButton
        className="arrow-btn next"
        onClick= {onClick}
      >
        <NavigateNextRoundedIcon />
      </IconButton>
    </div>
  );
}

const SecondPage = ({data: { allFacts: { edges }}}) => {
  const classes = useStyles();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  }
  return (
    <Layout>
      <SEO title="Page two" />

      <div  className={classes.container}>
        <Slider className={classes.slider} {...sliderSettings}>
          {edges.map(({ node }) => (
            <SmallFactCard
              key={node.id}
              className={classes.factCard}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              category={node.frontmatter.category}
              image={node.frontmatter.image}
            />
          ))}
          {edges.map(({ node }) => (
            <SmallFactCard
              key={node.id}
              className={classes.factCard}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              category={node.frontmatter.category}
              image={node.frontmatter.image}
            />
          ))}
        </Slider>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage

export const page2Query = graphql`
query {
  allFacts: allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          category
          image {
            src {
              childImageSharp {
                fixed(width: 190, height:150) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }
  }
}`
