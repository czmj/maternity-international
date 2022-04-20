import React from "react"
import Button from "../components/button"
import Container from "../components/container"
import Tile from "../components/tile"

import * as styles from "./services-preview.module.css"

const ServicesPreview = ({ services }) => {
  if (!services) return null
  if (!Array.isArray(services)) return null

  return (
    <section className={styles.container}>
      <Container>
        <h2 className={styles.title}>Services</h2>
        <ul className={styles.list}>
          {services
            .sort((a, b) => a.order - b.order)
            .map(service => {
              return (
                <li key={service.slug}>
                  <Tile
                    href={`/services#${service.slug}`}
                    title={service.name}
                    description={service.shortDescription}
                    icon={service.icon}
                  />
                </li>
              )
            })}
        </ul>
        <div className={styles.button}>
          <Button href="/services/">See all services</Button>
        </div>
      </Container>
    </section>
  )
}

export default ServicesPreview
