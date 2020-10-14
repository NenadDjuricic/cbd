import React from 'react'
import Img from "gatsby-image"
import {FaArrowRight} from 'react-icons/fa'
import {Link} from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const query = graphql`
query{
  defaultToggler:file(relativePath: { eq: "kozmetika.jpg" }){
    childImageSharp {
      fluid(maxWidth: 200 , quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Toggler = () => {
    const data = useStaticQuery(query);
    return (
      <div>
        <div className={"toggle-banner toggle-slider-wrapper d-none d-sm-none d-md-block"}>
        <input type="checkbox" id="check">
            </input>
            <label htmlFor="check">
            <div className="toggle-button" >  <FaArrowRight />    </div>
            </label>
        <div className="item">
          <div className="toggle-banner-slider owl-carousel owl-theme owl-loaded">
              <div className="owl-stage">
                <div className="owl-item">
                  <div className="item-wrapper">
                  <AniLink fade to="/products" duration={0.5}> <div className="title">CBD u kozmetici</div></AniLink>
                    <div className="description">
                      <p style={{color:"#3fd0d4"}}>CBD krema za lice protiv starenja 
                      </p>
                      <p className="text-center">Krema za lice protiv starenja Bio Cristalweed, ima piling i hidratantnu kremu, dajući licu mladost i svežinu. Dubinskim prodiranjem u različite slojeve kože uklanjaju se znaci starenja, a koža je glađa i čistija. &nbsp;
                        </p>
                        <Img fluid={data.defaultToggler.childImageSharp.fluid} />
                      <Link to='/products' className="btn-primary btn-outline-dark mt-4">Više o kozmetici</Link>
                    </div>
                  </div>
                </div>
               
              </div>
          </div>
      
        </div>
        
          
        </div>
        </div>  
    )
}
export default Toggler
