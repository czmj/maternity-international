import { Link } from "gatsby"
import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Icon from "../components/icon"
import * as styles from "./full-width-card.module.css"

const FullWidthCard = ({
  as = "div",
  direction = "left",
  title,
  description,
  icon,
  links,
  media,
}) => {
  const Tag = as

  return (
    <Tag className={`${styles.container} ${styles[direction]}`}>
      <div className={styles.header}>
        <AnimationOnScroll
          animateIn={`animate__fadeIn${
            direction === "left" ? "Left" : "Right"
          }`}
          animateOnce
        >
          <Icon icon={icon} size="large" color="secondary" />
          <h2 className={styles.title}>{title}</h2>
        </AnimationOnScroll>
      </div>
      <div className={styles.body}>
        <AnimationOnScroll
          animateIn={`animate__fadeIn${
            direction === "left" ? "Right" : "Left"
          }`}
          animateOnce
        >
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          {(links || media) && (
            <ul className="links">
              {links &&
                links.map(link => {
                  return (
                    <li>
                      <Link to={link.url} className="link">
                        <Icon icon="link" />
                        <span className="linkText">{link.text}</span>
                      </Link>
                    </li>
                  )
                })}
              {media &&
                media.map(link => {
                  let icon = "link"

                  if (link.mimeType.startsWith("image")) {
                    icon = "image"
                  }

                  if (link.mimeType.startsWith("video")) {
                    icon = "video"
                  }

                  if (link.mimeType.startsWith("audio")) {
                    icon = "headphones"
                  }

                  if (
                    link.mimeType.startsWith("application") ||
                    link.mimeType.startsWith("text")
                  ) {
                    icon = "file-text"
                  }

                  return (
                    <li>
                      <a href={link.publicUrl} className={styles.link}>
                        <Icon icon={icon} />
                        <span className={styles.linkText}>{link.title}</span>
                      </a>
                    </li>
                  )
                })}
            </ul>
          )}
        </AnimationOnScroll>
      </div>
    </Tag>
  )
}

export default FullWidthCard
