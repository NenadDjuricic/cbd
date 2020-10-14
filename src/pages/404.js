import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from "../sass/error.module.scss"
import { Link } from "gatsby"
const error = () => (
    <Layout>
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