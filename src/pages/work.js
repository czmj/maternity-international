import { graphql } from "gatsby"
import get from "lodash/get"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Card from "../components/card"
import Container from "../components/container"
import Hero from "../components/hero"
import Layout from "../components/layout"
import RichText from "../components/rich-text"
import Testimonial from "../components/testimonial"

class WorkPage extends React.Component {
  render() {
    const page = get(this, "props.data.contentfulPage")
    const projects = get(this, "props.data.allContentfulProject.nodes")

    return (
      <Layout
        location={this.props.location}
        title={page.title}
        description={page.leadText?.leadText}
        image={page.heroImage?.url}
      >
        <Hero
          title={page.title}
          subheading={page.leadText?.leadText}
          image={page.heroImage?.url}
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
        {page.content && (
          <div className="bg-light-grey">
            <Container>
              <RichText content={page.content} />
            </Container>
          </div>
        )}
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

export default WorkPage

export const servicesQuery = graphql`
  query WorkQuery {
    contentfulPage(slug: { eq: "work" }) {
      title
      heroImage {
        url
      }
      leadText {
        leadText
      }
      content {
        raw
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
