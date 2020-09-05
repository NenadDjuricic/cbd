import React from "react"
import styles from "../sass/footer.module.scss"
import links from "../constants/links"
import social from "../constants/social-icons"
import { Link } from "gatsby"
import styled from 'styled-components'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {social.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; CBD Srbija {new Date().getFullYear()} Kreirao: NDj Dizajn
      </div>
    </footer>
  )
}

export default Footer
