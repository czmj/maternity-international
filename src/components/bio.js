import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./bio.module.css"
import Container from "./container"

const Bio = ({ image, title, content }) => (
  <Container size="half" align="center">
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <h2>{title}</h2>
    {content && (
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    )}
  </Container>
)

export default Bio
