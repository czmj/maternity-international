import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"
import * as React from "react"
import * as styles from "./button.module.css"

const Button = ({ href, text, children }) => {
  if (isAbsoluteURL(href)) {
    return (
      <a className={styles.button} href={href}>
        {text || children}
      </a>
    )
  }

  return (
    <Link className={styles.button} to={href}>
      {text || children}
    </Link>
  )
}

export default Button
