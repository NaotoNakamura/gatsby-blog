import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import { graphql, PageProps, Link } from "gatsby"

const Home: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  return (
    <Layout>
      <div className="articles">
        <h2 className="articles-index">記事一覧</h2>
        <ul className="articles-list">
          {data.allContentfulArticle.edges.map(edge => {
            return (
              <Link
                to={`/article/${edge.node.slug}/`}
                className="articles-link"
              >
                <li className="articles-item">
                  <img
                    src={edge.node.image?.file?.url}
                    className="articles-img"
                  ></img>
                  <div className="articles-content">
                    <h3>{edge.node.title}</h3>
                    <div className="articles-discription">
                      {edge.node.description?.description}
                    </div>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query allContentfulArticle {
    allContentfulArticle {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`
