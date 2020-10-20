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
import { Helmet } from 'react-helmet'
export default ({data}) => (
   <Layout>
     <Helmet htmlAttributes={{lang: "rs"}} title={data.site.siteMetadata.title}>
       <meta name="description" content={data.site.siteMetadata.description} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <meta property="og:title" content={data.site.siteMetadata.title} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={data.site.siteMetadata.description} />
       <meta property="og:image" content={data.site.siteMetadata.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={data.site.siteMetadata.url} />
       <link rel="canonical" href={data.site.siteMetadata.url} />
     </Helmet>
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
  site{
    siteMetadata{
      description
      keywords
      title
      url
      author
      description
      image
    }
  }
  defaultBcg:file(relativePath: { eq: "frontPage.jpeg" }){
    childImageSharp {
      fluid(maxWidth:4160, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
