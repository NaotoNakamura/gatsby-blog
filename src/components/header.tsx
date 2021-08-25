import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">ブログタイトル</Link>
    </header>
  )
}

export default Header
