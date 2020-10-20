import React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import styles from "../sass/template.module.scss"
import Img from "gatsby-image"
import Nutrition from "../components/Nutrition"
import { Helmet } from 'react-helmet'
import SastojciLinija from "../components/SastojciLinije"
const Template = ({data}) => {
    const {images} = data.nekiProizvod;
    const [mainImage,...nekiProizvodImages] = images;
    return (
        <Layout>
            <Helmet htmlAttributes={{lang: "rs"}}>
       <meta name="description" content={data.nekiProizvod.opis.opis} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <meta property="og:title" content={data.site.siteMetadata.title} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={data.site.siteMetadata.description} />
       <meta property="og:image" content={data.site.siteMetadata.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={data.site.siteMetadata.url} />
       <link rel="canonical" href={data.site.siteMetadata.url} />
     </Helmet>
            <section className={styles.template}>
           
            <div className="container">
                <div className="row justify-content-center">
                <h1 style={{color:"#3fd0d4"}}>{data.nekiProizvod.ime}</h1>
                </div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <Img fluid={mainImage.fluid} className="img-fluid proizvodHover"></Img>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-text-bottom mt-5">
                <p>{data.nekiProizvod.opis.opis}</p>
                {data.nekiProizvod.kategorija === "Set" ? <SastojciLinija /> : ""}
                <Img fluid={nekiProizvodImages.fluid ? nekiProizvodImages[1].fluid : "" } className="proizvodSlikaIspod"></Img>
                <h6 className="mt-5 d-inline-block" style={{color:"#3fd0d4"}}>Kategorija: </h6><p className="d-inline-block text-dark">{data.nekiProizvod.kategorija}</p>
                {data.nekiProizvod.kategorija === "Set" ? "" : <div><h6 className="mt-2 d-inline" style={{color:"#3fd0d4"}}>Sastojci:</h6> <p className="d-inline text-dark ">{data.nekiProizvod.sastojci.sastojci}</p></div>}
                </div>
    {data.nekiProizvod.opisVeciIspod.opisVeciIspod === '""' ? "" : <p>{data.nekiProizvod.opisVeciIspod.opisVeciIspod}</p>}
{data.nekiProizvod.kategorija === "Čaj" ? <Nutrition /> : ""}
               

                </div>
            </div>
            </section>
        </Layout>
    )
}
export const query = graphql`
query($slug:String!){
    nekiProizvod:contentfulProizvod(slug:{eq:$slug}){
        ime
        kategorija
        sastojci{
            sastojci
        }
        opis{
            opis
        }
        opisVeciIspod{
            opisVeciIspod
        }
        images{
           fluid(quality:100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
    }
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
export default Template
