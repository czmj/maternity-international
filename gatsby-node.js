const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const template = path.resolve("./src/templates/project.js")

  const result = await graphql(
    `
      {
        allContentfulProject {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful data`,
      result.errors
    )
    return
  }

  const projects = result.data.allContentfulProject.nodes

  if (projects.length > 0) {
    projects.forEach(project => {
      createPage({
        path: `/work/${project.slug}/`,
        component: template,
        context: {
          slug: project.slug,
        },
      })
    })
  }
}
