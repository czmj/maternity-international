import React from "react"
import Icon from "./icon"
import * as styles from "./tile.module.css"

const Tile = ({ href, title, description, icon }) => {
  return (
    <a href={href} className={styles.tile}>
      <Icon icon={icon} size="large" color="secondary" />
      <h3 className={styles.title}>{title}</h3>
      <div>{description}</div>
    </a>
  )
}

export default Tile
