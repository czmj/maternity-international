import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "../../static/img/noun-pregnancy-603874.svg"
import * as styles from "./navigation.module.css"

const Navigation = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <img alt="" className={styles.logo} src={Logo} />
        <span className={styles.navigationItem}>
          {defaultTitle || "Maternity International"}
        </span>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/services/" activeClassName="active">
            Services
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/work/" activeClassName="active">
            Work
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/contact/" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
