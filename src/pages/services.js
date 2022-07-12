import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import FullWidthCard from "../sections/full-width-card"

class ServicesPage extends React.Component {
  render() {
    const page = get(this, "props.data.contentfulPage")
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
        />
        <ul className="list-unstyled">
          {services
            .sort((a, b) => a.order - b.order)
            .map((service, index) => {
              return (
                <li
                  key={service.slug}
                  id={service.slug}
                  className={index % 2 ? "light-grey" : ""}
                >
                  <Container>
                    <FullWidthCard
                      direction={index % 2 ? "right" : "left"}
                      icon={service.icon}
                      title={service.name}
                      description={
                        service.longDescription.childMarkdownRemark.html
                      }
                    />
                  </Container>
                </li>
              )
            })}
        </ul>
      </Layout>
    )
  }
}

export default ServicesPage

export const servicesQuery = graphql`
  query ServicesQuery {
    contentfulPage(slug: { eq: "services" }) {
      title
      heroImage {
        url
      }
      leadText {
        leadText
      }
    }
    allContentfulService {
      nodes {
        name
        icon
        slug
        longDescription {
          childMarkdownRemark {
            html
          }
        }
        order
      }
    }
  }
`
