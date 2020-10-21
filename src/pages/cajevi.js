import React from 'react'
import Product from '../components/Products/Product'
import styles from "../sass/cajevi.module.scss"
import Layout from "../components/Layout"
import Title from "../components/Tittle"
import {Link} from 'gatsby'
import {graphql } from "gatsby"
import SEO from "../components/SEO"
export const getProducts = graphql`
query{
    cajevi:allContentfulProizvod(filter:{kategorija:{eq:"Čaj"}}){
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
const cajevi = ({data}) => {
    const proizvodi = data.cajevi.edges;
    return (
        <Layout>
         <SEO title="Crystalweed Srbija | Čajevi" description="Biljni čajevi sa CBD-om. Ljubitelji biljnih čajeva i infuzija sigurno neće propustiti priliku da probaju biljne čajeve sa CBD-om." ></SEO>
        <div> 
        <Title title="Naši" subtitle="Čajevi" />
        <section className={styles.tours}>
        <div className={styles.center}>
        {proizvodi.map(({node})=> {
           return <Product key={node.contentful_id} proizvod={node} />
         } )}
         </div>
        <Link fade to="/products" className="btn-primary">
          Svi proizvodi
        </Link>
      </section> 
        </div>
        </Layout>
    )
}

export default cajevi
