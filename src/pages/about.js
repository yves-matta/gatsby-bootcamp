import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <p>I'm a full-stack developer trying to learn Gatsby</p>
      <p>Want to work with me, <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default AboutPage
