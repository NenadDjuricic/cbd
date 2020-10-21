import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from "../sass/error.module.scss"
import SEO from "../components/SEO"
import { Link } from "gatsby"
const error = ({data}) => (
    <Layout>
    <SEO title="Crystalweed Srbija | Error stranica" description="Crystalweed je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a" ></SEO>
    <header className={styles.error}>
    <Banner title="Uuuuuups verovatno ste na pogrešnom putu">
      <Link to="/" className="btn-primary">
        Nazad na pocetnu
      </Link>
    </Banner>
  </header>
  </Layout>
)

export default error