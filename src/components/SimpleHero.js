/* import React from "react"
import "../sass/global.scss"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const getImages = graphql`
  query Images {
    fluid: file(
      relativePath: { eq: "matteo-paganelli-MqISkm2iLGc-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SimpleHero = ({ children }) => {
  const data = useStaticQuery(getImages)
  return (
    <header>
      <BackgroundImage
        fluid={data.fluid.childImageSharp.fluid}
        className={"defaultHero"}
      >
        {children}
        <span className="defaultDivHero"></span>
      </BackgroundImage>
    </header>
  )
}

export default SimpleHero
 */