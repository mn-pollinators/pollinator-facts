const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `facts/` })
    createNodeField({
      node,
      name: `slug`,
      value: `/f${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      factRemark: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags___name) {
          fieldValue
        }
      }
    }
  `)

  // Extract facts and tags data from query
  const facts = result.data.factRemark.edges
  const tags = result.data.tagsGroup.group

  facts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/factTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  console.log(tags);
  tags.forEach( tag => {
    console.log(tag);
    createPage({
      path: `/tags/${(tag.fieldValue)}`,
      component: path.resolve(`./src/templates/tagTemplate.js`),
      context: {
        tag: tag.fieldValue
      },
    })
  })
}
