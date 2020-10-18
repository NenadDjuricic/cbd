import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/ulja.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {graphql } from "gatsby"
export const getProducts = graphql`
query{
  kreme:allContentfulProizvod(filter:{kategorija: {eq:"Krema"}}){
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
  setovi:allContentfulProizvod(filter:{kategorija: {eq:"Set"}}){
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
  kozmetika:allContentfulProizvod(filter:{kategorija: {eq:"Kozmetika"}}){
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

const kozmetika = ({data}) => {
    const kreme = data.kreme.edges;
    const setovi = data.setovi.edges;
    const kozmetika = data.kozmetika.edges
    return (
        <Layout>
        <div> 
        <Title title="Naša" subtitle="Kozmetika" />
        <section className={styles.tours}>
        <div className={styles.center}>
        {kreme.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         {setovi.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         {kozmetika.map(({node})=> {
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

export default kozmetika
