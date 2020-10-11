import React from 'react'
import styles from "../sass/imageIndex.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"

const query = graphql`
query{
  first:file(relativePath: { eq: "girl.jpeg" }){
    childImageSharp {
      fluid(maxWidth:660, maxHeight: 250, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  second:file(relativePath: { eq: "tea.jpeg" }){
    childImageSharp {
      fluid(maxWidth:960, maxHeight: 450, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
  third:file(relativePath: { eq: "cbd.jpeg" }){
    childImageSharp {
      fluid(maxWidth:660, maxHeight:400, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`




const ImagesIndex = () => {
    const response = useStaticQuery(query);
    console.log(response);
    return (
 <ul className={styles.ul}>
  <li className={`${styles.feature} position-relative`}>
  <div className={`${styles.textBlock}`}>
    <h4>Opustite se uz omiljeni ukus caja</h4>
    
  </div>
  <div className={`${styles.textBlockSecond}`}>
  <AniLink fade to="/cajevi" duration={0.5}><h5 className="text-center">CBD Cajevi</h5></AniLink>
  </div>
  <Img fluid={response.second.childImageSharp.fluid} className={`${styles.imge}`}/>
  
  </li>
  <li className={`${styles.two} position-relative`}>
  <div className={`${styles.textBlockThird}`}>
  <AniLink fade to="/kozmetika" duration={0.5}><h5 className="text-center">CBD Kozmetika</h5></AniLink>
  </div>
  <Img fluid={response.first.childImageSharp.fluid} className={`${styles.imge1}`}/>
  </li>
  <li className={`position-relative`}>
  <div className={`${styles.textBlockThird}`}>
  <AniLink fade to="/ulja" duration={0.5}><h5 className="text-center">CBD Ulja</h5></AniLink>
  </div>
  <Img fluid={response.third.childImageSharp.fluid} className={`${styles.imge1}`}/>
  </li>
</ul>
    )
}

export default ImagesIndex
