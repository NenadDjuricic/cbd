import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../sass/index.module.scss'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/about'
import Services from '../components/services'
export default () => (
  <>
   <Layout>
     <SimpleHero>
     <Banner title="Crystalweed® najbolji CBD proizvodi u Srbiji" info="Dobrodosli u legalan svet proizvoda od kanabisa" subInfo="CBD Ulja  — CBD Cajevi — CBD Kozmetika">
      <Link to='/products' className="btn-white">Proizvodi</Link>

     </Banner>
     </SimpleHero>
     <Services />
   <About />
   
  </Layout>

  </>
)
