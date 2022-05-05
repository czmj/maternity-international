import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import RichText from '../components/rich-text'

class ProjectTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulProject")

    return (
      <Layout location={this.props.location}>
        <Hero title={post.title} image={post.heroImage.url}/>
        <Container size="75">
          <RichText content={post.content}/>
        </Container>
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
      heroImage {
        url
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(height: 500)
            __typename
          }
        }
      }
    }
  }
`
