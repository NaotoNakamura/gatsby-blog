import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import { graphql, PageProps } from "gatsby"

const Home: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  return (
    <Layout>
      <div className="articles">
        <h2 className="articles_index">記事一覧</h2>
        <ul className="articles__list">
          {data.allContentfulArticle.edges.map(edge => {
            return (
              <li className="articles__list__item">
                <img
                  src={edge.node.image?.file?.url}
                  className="article__img"
                ></img>
                <div className="article__content">
                  <h3>{edge.node.title}</h3>
                  <div className="article__discription">
                    {edge.node.description?.description}
                  </div>
                </div>
              </li>
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
