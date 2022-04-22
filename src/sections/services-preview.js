import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"
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
            .map((service, index) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__fadeInUp"
                  delay={100 * index}
                  animateOnce
                >
                  <li key={service.slug} className={styles.listItem}>
                    <Tile
                      href={`/services#${service.slug}`}
                      title={service.name}
                      description={service.shortDescription}
                      icon={service.icon}
                    />
                  </li>
                </AnimationOnScroll>
              )
            })}
        </ul>
        <div className={styles.button}>
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            duration="2"
            animateOnce
          >
            <Button href="/services/">See all services</Button>
          </AnimationOnScroll>
        </div>
      </Container>
    </section>
  )
}

export default ServicesPreview
