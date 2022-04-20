import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import Container from "../components/container"

class RootIndex extends React.Component {
  render() {
    const [person] = get(this, "props.data.allContentfulPerson.nodes")

    return (
      <Layout location={this.props.location}>
        <Container>
          <p>Hello {person.name}</p>
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson {
      nodes {
        bio {
          raw
        }
        name
        profileImage {
          gatsbyImageData(
            aspectRatio: 1
            width: 500
            placeholder: BLURRED
            cropFocus: FACE
          )
        }
      }
    }
  }
`
