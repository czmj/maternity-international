import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"

class ProjectTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulProject")

    return (
      <Layout location={this.props.location}>
        <Hero title={post.title} />
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      content {
        raw
      }
    }
  }
`
