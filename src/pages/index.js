import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
/* import SimpleHero from '../components/SimpleHero' */

import Banner from '../components/Banner'
import About from '../components/about'
import Services from '../components/services'
import StyledHero from '../components/StyledHero'
import Istaknuti from '../components/Products/IstaknutiProizvodi'
import Toggler from '../components/Toggler'
import {graphql} from "gatsby"
import ImagesIndex from '../components/ImagesIndex'
import CorouselBlog from "../components/corouselBlog"
import SEO from "../components/SEO"
export default ({data}) => (
   <Layout>
     <SEO title="Crystalweed Srbija" description="Crystalweed je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a" ></SEO>
     <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
     <Banner title="Crystalweed® najbolji CBD proizvodi u Srbiji" info="Dobrodošli u legalan svet proizvoda od kanabisa" subInfo="CBD Ulja  — CBD Čajevi — CBD Kozmetika — CBD Pupoljci">
      <Link to='/products' className="btn-white">Proizvodi</Link>

     </Banner>
     </StyledHero>
     {/* <SimpleHero>
     <Banner title="Crystalweed® najbolji CBD proizvodi u Srbiji" info="Dobrodosli u legalan svet proizvoda od kanabisa" subInfo="CBD Ulja  — CBD Cajevi — CBD Kozmetika">
      <Link to='/products' className="btn-white">Proizvodi</Link>

     </Banner>
     </SimpleHero> */}
     <Services />
   <Istaknuti />
    <Toggler />

   <About />
   <ImagesIndex></ImagesIndex>
   <CorouselBlog></CorouselBlog>
  </Layout>
 
)

export const query = graphql`
query{
  defaultBcg:file(relativePath: { eq: "frontPage.jpeg" }){
    childImageSharp {
      fluid(maxWidth:4160, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
