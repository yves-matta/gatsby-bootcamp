const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//         node,
//         name: 'slug',
//         value: slug
//     })
//   }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     // 1. get path to template
//     const blogTemplate = path.resolve('./src/templates/blog.js')

//     // 2. get markdown data
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     // 3. create new pages
//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${node.fields.slug}`,
//             context: {
//                 slug: node.fields.slug
//             }
//         })
//     })
// }



module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')

    // 2. get markdown data
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 3. create new pages
    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug
            }
        })
    })
}