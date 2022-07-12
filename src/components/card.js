import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./card.module.css"

const Card = ({ href, title, description, image }) => {
  return (
    <a href={href} className={styles.card}>
      {image && <GatsbyImage alt={title} image={image.gatsbyImageData} />}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.lead}>{description}</p>
    </a>
  )
}

export default Card
