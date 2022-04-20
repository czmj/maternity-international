import * as feather from "feather-icons"
import React from "react"
import * as styles from "./tile.module.css"

const Tile = ({ href, title, description, icon }) => {
  const svg = (feather.icons[icon] || feather.icons.x).toSvg({
    width: 40,
    height: 40,
  })

  return (
    <a href={href} className={styles.tile}>
      <div
        className={styles.icon}
        dangerouslySetInnerHTML={{
          __html: svg,
        }}
      />
      <h3 className={styles.title}>{title}</h3>
      <div>{description}</div>
    </a>
  )
}

export default Tile
