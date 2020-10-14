import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import {graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"
import Tittle from './Tittle'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
const query = graphql`
query{
  first:file(relativePath: { eq: "girlCbd.jpeg" }){
    childImageSharp {
      fluid(maxWidth:360, maxHeight: 250, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
  second:file(relativePath: { eq: "cbdTea.jpeg" }){
    childImageSharp {
      fluid(maxWidth:360, maxHeight: 250, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
  third:file(relativePath: { eq: "cbdOil.jpeg" }){
    childImageSharp {
      fluid(maxWidth:300, maxHeight:250, quality:100){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const CorouselBlog = () => {
    const response = useStaticQuery(query);
    return (
       <div className="container">
          <Tittle title="Novije" subtitle="vesti"/>
           <CardDeck>
  <Card>
    <Img fluid={response.first.childImageSharp.fluid} style={{height:"250px",width:"auto"}}/>
    <Card.Body>
      <Card.Title>CBD u kozmetici</Card.Title>
      <Card.Text>
      Sada je izvesna činjenica da kanabis ima korisna svojstva i za kožu našeg tela i da, ne samo zvezde, već i obični ljudi, koristi kozmetiku na bazi kanabisa, tačnije sa CBD-om.
      </Card.Text>
      
      <AniLink fade to="/blog/cbd-kozmetika" className="btn-secondary " >
          Pročitaj više
        </AniLink>
        
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Oktobar 11. 2020</small>
    </Card.Footer>
  </Card>
  <Card>
  <Img fluid={response.second.childImageSharp.fluid} style={{height:"250px",width:"auto"}}/>
    <Card.Body>
      <Card.Title>CBD Čajevi</Card.Title>
      <Card.Text>
      Ljubitelji biljnih čajeva i infuzija sigurno neće propustiti priliku da probaju biljne čajeve sa CBD-om.
      </Card.Text>
     
      <AniLink fade to="/blog/cbd-cajevi" className="btn-secondary " >
          Pročitaj više
        </AniLink>
       
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Oktobar 8. 2020</small>
    </Card.Footer>
  </Card>
  <Card>
  <Img fluid={response.third.childImageSharp.fluid} style={{height:"250px",width:"auto"}}/>
    <Card.Body>
      <Card.Title>CBD Ulje: Ulje kanabisa i zdravstvene Koristi</Card.Title>
      <Card.Text>
      Šta je ulje kanabisa? Ulje kanabidiol (ulje kanabisa), poznato i kao CBD ulje, izvlači se iz kanabisa, međutim, ne treba ga mešati sa uljem konoplje. CBD ulje sve više napreduje zahvaljujući svojim višestrukim zdravstvenim prednostima.
      </Card.Text>
      
      <AniLink fade to="/blog/cbd-ulje" className="btn-secondary" >
          Pročitaj više
        </AniLink>
        
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Oktobar 7. 2020</small>
    </Card.Footer>
  </Card>
</CardDeck>
<div className="text-center mt-4 mb-2">
<AniLink fade to="/novosti" className="btn-primary " >
          Sve vesti
        </AniLink>
        </div>
       </div>
    )
}

export default CorouselBlog
