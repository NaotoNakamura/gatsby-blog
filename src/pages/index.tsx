import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="articles">
        <h2 className="articles_index">記事一覧</h2>
        <ul className="articles__list">
          <li className="articles__list__item">
            <div className="article__img"></div>
            <div className="article__content">
              <h3>記事1タイトル</h3>
              <div className="article__discription">記事1の説明</div>
            </div>
          </li>
          <li className="articles__list__item">
            <div className="article__img"></div>
            <div className="article__content">
              <h3>記事2タイトル</h3>
              <div className="article__discription">記事2の説明</div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
