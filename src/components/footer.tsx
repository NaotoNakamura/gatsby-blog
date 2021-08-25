import React from "react"
import "../styles/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} ここにブログタイトル
    </footer>
  )
}

export default Footer
