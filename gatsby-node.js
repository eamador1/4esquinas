const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query PrincipiosModal {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            featuredImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: '/principios/' + node.frontmatter.slug,
      component: path.resolve('./src/pages/templates/principios-details.js'),
      context: {
        slug: node.frontmatter.slug,
        html: node.html,
        featuredImg:
          node.frontmatter.featuredImg?.childImageSharp?.gatsbyImageData || null,
      },
    })
  })
}

