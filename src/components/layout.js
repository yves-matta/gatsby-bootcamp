import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
