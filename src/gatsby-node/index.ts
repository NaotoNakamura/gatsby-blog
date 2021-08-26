import path from "path"
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  const result = await graphql<{
    allContentfulArticle: GatsbyTypes.Query["allContentfulArticle"]
  }>(
    `
      {
        allContentfulArticle {
          edges {
            node {
              title
              image {
                file {
                  url
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
              updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
              description {
                description
              }
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result!.data!.allContentfulArticle

  edges.forEach(edge => {
    createPage({
      path: `/article/${edge.node.slug}/`,
      component: path.resolve("./src/templates/article.tsx"),
      context: { article: edge.node },
    })
  })
}
