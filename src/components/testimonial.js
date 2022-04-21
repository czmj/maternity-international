import React from "react"
import Container from "./container"
import * as styles from "./testimonial.module.css"

const Testimonial = ({ author, jobTitle, content }) => {
  return (
    <section className={styles.container}>
      <Container>
        <figure className={styles.content}>
          <blockquote
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <figcaption className={styles.cite}>
            —{author}
            {jobTitle && `, ${jobTitle}`}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}

export default Testimonial
