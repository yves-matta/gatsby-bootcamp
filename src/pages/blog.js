import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>{node.publishDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
