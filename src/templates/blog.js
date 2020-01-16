import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": ({ data }) => {
        const alt = data.target.fields.title['en-US']
        const src = data.target.fields.file['en-US'].url
        return <img alt={alt} src={src} />
      }
    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
