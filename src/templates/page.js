import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import RichText from "../components/rich-text"

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, "data.contentfulPage")

    return (
      <Layout location={this.props.location}>
        <Hero
          title={page.title}
          image={page.heroImage.url}
          subheading={page.leadText.leadText}
        />
        <Container size="75">
          <RichText content={page.content} />
        </Container>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      leadText {
        leadText
      }
      heroImage {
        url
      }
      content {
        raw
      }
    }
  }
`
