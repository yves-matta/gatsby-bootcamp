import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <p>
        The best way to reach me is via twitter:{" "}
        <a href="https://twitter.com/YvesJudeMatta" target="_blank" rel="noopener noreferrer">
          YvesJudeMatta
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
