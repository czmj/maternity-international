import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import * as styles from "./rich-text.module.css"

const RichText = ({ content }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <div className={styles.richText__imageWrapper}>
            <GatsbyImage
              image={gatsbyImageData}
              alt={description}
            />
          </div>
        )
     },
    },
  }

  return (
    <div className={styles.richText}>
      {renderRichText(content, options)}
    </div>
  )
}

export default RichText
