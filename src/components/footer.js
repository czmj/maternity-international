import React from "react"

import Container from "./container"
import * as styles from "./footer.module.css"

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by Lyra Pallotti and{" "}
      <a href="https://github.com/czmj">Clara Jordan</a>
    </div>
  </Container>
)

export default Footer
