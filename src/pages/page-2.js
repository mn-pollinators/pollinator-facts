import React from "react"
import { Link, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallFactCard from "../components/small-fact-card"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles({
  cards: {
    display: 'flex',
    overflowX: 'auto',
    margin: '50px 0'
  },
  factCard: {
    minWidth: '190px',
    margin: '5px',
  }
});
function SampleArrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
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
    arrows: true,
    pauseOnHover: true,
    nextArrow: <SampleArrows/>,
    prevArrow: <SampleArrows/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <Slider {...sliderSettings}>
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
