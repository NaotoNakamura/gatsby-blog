import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="not-found-message">
        <h1>404 Not Found</h1>
        <Link to="/">トップページへ</Link>
      </div>
    </Layout>
  )
}

export default NotFound
