import React from 'react'
import ProizvodiLista from './ProizvodiLista'
import { useStaticQuery, graphql } from "gatsby"
const getProizvodi = graphql`
query{
  sviProizvodi:allContentfulProizvod{
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
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
export const SviProizvodi = () => {
    const {sviProizvodi} = useStaticQuery(getProizvodi);
    return (
        <div>
            <ProizvodiLista proizvod={sviProizvodi}/>
        </div>
    )
}
