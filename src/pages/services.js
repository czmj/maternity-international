import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import FullWidthCard from "../sections/full-width-card"

class ServicesPage extends React.Component {
  render() {
    const services = get(this, "props.data.allContentfulService.nodes")

    return (
      <Layout location={this.props.location}>
        <Hero
          title="Services"
          subheading="Burrow under covers stinky cat, yet i dreamt about fish yum!. Bleghbleghvomit my furball really tie the room together scratch, and refuse to drink water except out of someone's glass massacre a bird in the living room and then look like the cutest and most innocent animal on the planet"
          image="https://placekitten.com/1800/900"
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
                      links={service.link}
                      media={service.media}
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
        link {
          id
          text
          url
        }
        media {
          id
          title
          publicUrl
          mimeType
        }
        order
      }
    }
  }
`
