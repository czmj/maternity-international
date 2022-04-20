import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import Bio from "../components/bio"

class RootIndex extends React.Component {
  render() {
    const [person] = get(this, "props.data.allContentfulPerson.nodes")

    return (
      <Layout location={this.props.location}>
        <Bio
          image={person.profileImage.gatsbyImageData}
          title={person.name}
          content={person.bio.childMarkdownRemark.html}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson {
      nodes {
        name
        bio {
          childMarkdownRemark {
            html
          }
        }
        profileImage {
          gatsbyImageData(aspectRatio: 1, width: 350, placeholder: BLURRED)
        }
      }
    }
  }
`
