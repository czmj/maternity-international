import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Bio from "../components/bio"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Testimonial from "../components/testimonial"
import ServicesPreview from "../sections/services-preview"

class RootIndex extends React.Component {
  render() {
    const page = get(this, "props.data.contentfulPage")
    const person = get(this, "props.data.contentfulPerson")
    const services = get(this, "props.data.allContentfulService.nodes")

    return (
      <Layout
        location={this.props.location}
        title={page.title}
        description={page.leadText.leadText}
        image={page.heroImage.url}
      >
        <Hero
          title={page.title}
          subheading={page.leadText.leadText}
          image={page.heroImage.url}
          button={{
            text: "Contact us",
            href: "#contact",
          }}
        />
        <ServicesPreview services={services} />
        <Bio
          image={person.profileImage.gatsbyImageData}
          title={person.name}
          content={person.bio.childMarkdownRemark.html}
        />
        {page.testimonial && (
          <Testimonial
            author={page.testimonial.author}
            jobTitle={page.testimonial.jobTitle}
            content={page.testimonial.review.childMarkdownRemark.html}
          />
        )}
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(slug: { eq: "index" }) {
      title
      heroImage {
        url
      }
      leadText {
        leadText
      }
      testimonial {
        author
        jobTitle
        review {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    contentfulPerson(name: { glob: "*Phoebe Pallotti*" }) {
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
    allContentfulService(limit: 4) {
      nodes {
        name
        icon
        slug
        shortDescription
        order
      }
    }
  }
`
