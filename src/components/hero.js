import React from "react"
import Button from "./button"
import Container from "./container"
import { AnimationOnScroll } from "react-animation-on-scroll"
import * as styles from "./hero.module.css"

const Hero = ({ image, title, subheading, button }) => (
  <div className={styles.hero}>
    <div
      className={styles.background}
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      <Container>
        <div className={styles.inner}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
            <h1 className={styles.title}>{title}</h1>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
            {button && <Button text={button.text} href={button.href} />}
          </AnimationOnScroll>
        </div>
      </Container>
    </div>
  </div>
)

export default Hero
