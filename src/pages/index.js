import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import Bio from "../components/bio"
import Hero from "../components/hero"

class RootIndex extends React.Component {
  render() {
    const site = get(this, "props.data.site")
    const [person] = get(this, "props.data.allContentfulPerson.nodes")

    return (
      <Layout location={this.props.location}>
        <Hero
          title={site.siteMetadata.description}
          subheading="Burrow under covers stinky cat, yet i dreamt about fish yum!. Bleghbleghvomit my furball really tie the room together scratch, and refuse to drink water except out of someone's glass massacre a bird in the living room and then look like the cutest and most innocent animal on the planet"
          image="https://placekitten.com/1800/900"
          button={{
            text: "Contact us",
            href: "/contact/",
          }}
        />
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
    site {
      siteMetadata {
        description
      }
    }
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
