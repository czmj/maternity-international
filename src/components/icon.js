import * as feather from "feather-icons"
import React from "react"
import * as styles from "./icon.module.css"

const Icon = ({ icon, size, color }) => {
  const svgOptions = {}

  if (size === "large") {
    svgOptions.width = 40
    svgOptions.height = 40
  }

  const svg = (feather.icons[icon] || feather.icons.x).toSvg(svgOptions)
  let className = styles.icon

  if (size) {
    className += ` ${styles[size]}`
  }

  if (color) {
    className += ` ${styles[color]}`
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: svg,
      }}
    />
  )
}

export default Icon
