import React from "react"
import "./animation.css"
import Footer from "./footer"
import "./global.css"
import Navigation from "./navigation"
import Seo from "./seo"
import "./variables.css"

class Template extends React.Component {
  render() {
    const { children, title } = this.props

    return (
      <>
        <Seo title={title}/>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
