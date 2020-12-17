require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pollinator Facts`,
    description: `Learn various facts about pollinators.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `facts`,
        path: `${__dirname}/src/facts`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pollinator Facts`,
        short_name: `Pollinator Facts`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#4CAF50`,
        display: `standalone`,
        icon: `static/icons/icon-square.svg`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see:
          // https://developer.mozilla.org/en-US/docs/Web/Manifest
          // https://w3c.github.io/manifest/#purpose-member
          purpose: `maskable`,
        },
      },
    },
    {
      resolve:`gatsby-plugin-netlify-cms`,
      options:{
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    },
    {
      resolve: "gatsby-remark-related-posts",
      options: {
        posts_dir: `${__dirname}/src/facts`,
        doc_lang: "en",
      },
    },
    {
      resolve: `gatsby-source-github-contributors`,
      options: {
        repo: "mn-pollinators/pollinator-facts"
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
        query UsersQuery {
          nate: user(login: "nkfoss") {
            ...UserFragment
          }
          liz: user(login: "stev0531") {
            ...UserFragment
          }
          matt: user(login: "munnsmunns") {
            ...UserFragment
          }
          olivia: user(login: "carl5004") {
            ...UserFragment
          }
        }

        fragment UserFragment on User {
          login
          name
          url
          avatarUrl
        }
        `
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
