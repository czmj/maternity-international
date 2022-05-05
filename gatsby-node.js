const path = require("path")

const getGraphQlData = async ({ type, graphql, reporter }) => {
  const contentfulType = `allContentful${type}`
  const data = await graphql(
    `
      {
        ${contentfulType} {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (data.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful data`,
      data.errors
    )
    return
  }

  return data.data[contentfulType].nodes
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const pageTemplate = path.resolve("./src/templates/page.js")

  const projects = await getGraphQlData({ type: "Project", graphql, reporter })
  const pages = await getGraphQlData({ type: "Page", graphql, reporter })

  if (projects.length > 0) {
    projects.forEach(project => {
      createPage({
        path: `/work/${project.slug}/`,
        component: projectTemplate,
        context: {
          slug: project.slug,
        },
      })
    })
  }

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: `/${page.slug}/`,
        component: pageTemplate,
        context: {
          slug: page.slug,
        },
      })
    })
  }
}
