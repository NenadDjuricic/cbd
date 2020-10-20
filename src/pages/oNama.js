import React from "react"
import Layout from '../components/Layout'
import VideoBg from 'reactjs-videobg'
import mp4 from "../images/cbdVideo.mp4"
import style from "../sass/aboutPage.module.scss"
import {graphql} from "gatsby"
import { FaQuoteLeft } from "react-icons/fa";
import { Helmet } from 'react-helmet'
const oNama = ({data}) => (
  
      <Layout>
        <Helmet htmlAttributes={{lang: "rs"}} title={"Crystalweed Srbija | O nama"}>
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
      <div className={style.divider}></div>
        <div className={`${style.weAre} container-fluid`}>
        <div className="row">
     <div className="col-12">
       <h1 className="text-center">Mi smo Crystalweed ®</h1>
       <p className='text-center p-2'>Već više od 5 godina u ovom sektroru pažljivo biramo materijale za svoje proizvode kako bismo garantovali maksimalnu vrednost uz najviše iskustvo.

Iz tog razloga,visok kvalitet,pouzdanost i profesionalnost su karakteristike po kojima želimo da ostanemo upamćeni!</p>
     </div>
   </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
   <VideoBg wrapperClass={style.video} videoClass={style.videoCbd}>
  <VideoBg.Source src={mp4} type="video/mp4"/>

   </VideoBg>
   </div>
   <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-auto mb-auto">
     <h1>Od ideje do realizacije</h1>
     <p>Crystalweed postoji nešto više od 5 godina. Rođeni iz polprivredne
tradicije, uz veliku strast prema zemaljskom vremenu dovelo je do
interesovanja za alternativne kulture, uključujući i legalni
kanabiss.Danas ovu stranu Cristalveed deli proizvodnju proizvoda za koje
pažljivo biraju materijal, kako bi garantirali maksimalnu vrednost,
visoka kvaliteta, publika i profesionalizam.
Glavna komponenta legalnog kanabisa je CBD (CBD)</p>
     
   </div>
   </div>
   </div>
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
  
}
`
export default oNama
