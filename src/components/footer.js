import { Link } from "gatsby"
import React from "react"
import Container from "./container"
import Icon from "./icon"
import * as styles from "./footer.module.css"

const Footer = () => (
  <footer id="contact">
    <Container>
      <h1>Get in touch</h1>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Icon color="secondary" icon="map-pin" />
          <address className={styles.contactDetails}>
            38 Holberry Gardens, <br />
            Sheffield, <br />
            S10 2FR
          </address>
        </div>
        <div className={styles.contactItem}>
          <Icon color="secondary" icon="phone" />
          <span className={styles.contactDetails}>+44 7779109719</span>
        </div>
        <div className={styles.contactItem}>
          <Icon color="secondary" icon="at-sign" />
          <a
            href="mailto:maternityinternational@gmail.com"
            className={styles.contactDetails}
          >
            maternityinternational@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.site}>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/about/">About</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/services/">Services</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/work/">Work</Link>
          </li>
        </ul>
        <div className={styles.credit}>
          Built by Lyra Pallotti and{" "}
          <a href="https://github.com/czmj">Clara Jordan</a>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
