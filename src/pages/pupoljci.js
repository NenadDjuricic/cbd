import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/pupoljci.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {graphql } from "gatsby"
import { Helmet } from 'react-helmet'
export const getProducts = graphql`
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
    pupoljci:allContentfulProizvod(filter:{kategorija:{eq:"Pupoljci"}}){
      edges{
        node{
          ime
          slug 
          contentful_id
          kategorija
          opis{
            opis
          }
         images{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    
  }
`

const pupoljci = ({data}) => {
    const proizvodi = data.pupoljci.edges;
    const seo = data.site.siteMetadata;
    return (
        <Layout>
          <Helmet htmlAttributes={{lang: "rs"}} title={"Crystalweed Srbija | Pupoljci"}>
       <meta name="description" content={seo.description} />
       <meta name="keywords" content={seo.keywords} />
       <meta property="og:title" content={seo.title} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={seo.description} />
       <meta property="og:image" content={seo.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={seo.url} />
       <link rel="canonical" href={seo.url} />
     </Helmet>
        <div> 
        <Title title="Naši" subtitle="Pupoljci" />
        <section className={styles.tours}>
        <div className={styles.center}>
        {proizvodi.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         </div>
        <AniLink fade to="/products" className="btn-primary">
          Svi proizvodi
        </AniLink>
      </section> 
        </div>
        </Layout>
    )
}

export default pupoljci
