import React from 'react'
import styles from "../sass/imageIndex.module.scss"
import {Link} from "gatsby";

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
      fluid(maxWidth:660, maxHeight: 450, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
  third:file(relativePath: { eq: "cbd.jpeg" }){
    childImageSharp {
      fluid(maxWidth:660, maxHeight:400, quality:60){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`




const ImagesIndex = () => {
    const response = useStaticQuery(query);
    return (
 <ul className={`${styles.ul} container-fluid`}>
  <li className={`${styles.feature} position-relative`}>
  <div className={`${styles.textBlock} d-none d-sm-block`}>
    <h4 className="m-2">Opustite se uz omiljeni ukus čaja</h4>
    
  </div>
  <div className={`${styles.textBlockSecond}`}>
  <Link fade to="/cajevi" duration={0.5}><h5 className="text-center">CBD Čajevi</h5></Link>
  </div>
  <Img fluid={response.second.childImageSharp.fluid} className={`${styles.imge}`}/>
  
  </li>
  <li className={`${styles.two} position-relative`}>
  <div className={`${styles.textBlockThird}`}>
  <Link fade to="/kozmetika" duration={0.5}><h5 className="text-center">CBD Kozmetika</h5></Link>
  </div>
  <Img fluid={response.first.childImageSharp.fluid} className={`${styles.imge2}`}/>
  </li>
  <li className={`position-relative`}>
  <div className={`${styles.textBlockThird}`}>
  <Link fade to="/ulja" duration={0.5}><h5 className="text-center">CBD Ulja</h5></Link>
  </div>
  <Img fluid={response.third.childImageSharp.fluid} className={`${styles.imge1}`}/>
  </li>
</ul>
    )
}

export default ImagesIndex
