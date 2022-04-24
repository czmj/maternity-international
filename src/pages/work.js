import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Card from "../components/card"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Testimonial from "../components/testimonial"

class WorkPage extends React.Component {
  render() {
    const projects = get(this, "props.data.allContentfulProject.nodes")
    const [testimonial] = get(this, "props.data.allContentfulTestimonial.nodes")

    return (
      <Layout location={this.props.location}>
        <Hero
          title="Work"
          subheading="Burrow under covers stinky cat, yet i dreamt about fish yum!. Bleghbleghvomit my furball really tie the room together scratch, and refuse to drink water except out of someone's glass massacre a bird in the living room and then look like the cutest and most innocent animal on the planet"
          image="https://placekitten.com/1800/900"
        />
        <Container>
          <ul className="list-unstyled columns margin-y">
            {projects.map(project => {
              return (
                <li key={project.slug} id={project.slug}>
                  <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                    <Card
                      href={`/work/${project.slug}`}
                      image={project.heroImage}
                      title={project.title}
                      description={project.description}
                    />
                  </AnimationOnScroll>
                </li>
              )
            })}
          </ul>
        </Container>
        <Testimonial
          author={testimonial.author}
          jobTitle={testimonial.jobTitle}
          content={testimonial.review.childMarkdownRemark.html}
        />
      </Layout>
    )
  }
}

export default WorkPage

export const servicesQuery = graphql`
  query WorkQuery {
    allContentfulTestimonial {
      nodes {
        author
        jobTitle
        review {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulProject {
      nodes {
        heroImage {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 780, height: 780)
        }
        slug
        title
        description
      }
    }
  }
`
