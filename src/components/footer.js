import React from "react"

import Container from "./container"
import * as styles from "./footer.module.css"

const Footer = () => (
  <div className={styles.footer}>
    <Container as="footer">
      Built by Lyra Pallotti and{" "}
      <a href="https://github.com/czmj">Clara Jordan</a>
    </Container>
  </div>
)

export default Footer
