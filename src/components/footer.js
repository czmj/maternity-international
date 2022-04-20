import React from "react"

import Container from "./container"
import * as styles from "./footer.module.css"

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by Lyra Pallotti and Clara Jordan
    </div>
  </Container>
)

export default Footer
