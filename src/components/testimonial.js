import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Container from "./container"
import * as styles from "./testimonial.module.css"

const Testimonial = ({ author, jobTitle, content }) => {
  return (
    <section className={styles.container}>
      <Container>
        <figure className={styles.content}>
          <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
            <blockquote
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce>
            <figcaption className={styles.cite}>
              —{author}
              {jobTitle && `, ${jobTitle}`}
            </figcaption>
          </AnimationOnScroll>
        </figure>
      </Container>
    </section>
  )
}

export default Testimonial
