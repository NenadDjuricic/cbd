import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/ulja.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import {Link} from 'gatsby';
import {graphql } from "gatsby"
import SEO from "../components/SEO"
export const getProducts = graphql`
query{
  
    ulja:allContentfulProizvod(filter:{kategorija:{eq:"Ulje"}}){
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

const ulja = ({data}) => {
    const proizvodi = data.ulja.edges;
    return (
        <Layout>
          <SEO title="Crystalweed Srbija | Ulja" description="Crystalweed je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a" ></SEO>
        <div> 
        <Title title="Naša" subtitle="Ulja" />
        <section className={styles.tours}>
        <div className={styles.center}>
        {proizvodi.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         </div>
        <Link to="/products" className="btn-primary">
          Svi proizvodi
        </Link>
      </section> 
        </div>
        </Layout>
    )
}

export default ulja
