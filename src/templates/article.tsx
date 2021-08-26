import React from "react"
import "../styles/article.css"
import Layout from "../components/layout"

interface Props {
  pageContext: GatsbyTypes.SitePageContext
}

const Article: React.FC<Props> = ({ pageContext }) => {
  const article = pageContext.article
  const { title, updatedAt, image } = article!
  const body = article?.body?.childMarkdownRemark?.html

  return (
    <Layout>
      <div className="article">
        <div className="article-card">
          <div className="article-contents">
            <div className="artcle-title">{title}</div>
            <p className="updated-date">{updatedAt}</p>
            <img
              src={image?.file?.url}
              className="article-img"
              alt="main-image"
            ></img>
            <div dangerouslySetInnerHTML={{ __html: body! }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
