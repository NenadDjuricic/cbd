import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from "../sass/error.module.scss"
import {graphql} from "gatsby"
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
const error = ({data}) => (
    <Layout>
      <Helmet htmlAttributes={{lang: "rs"}} title={data.site.siteMetadata.title}>
       <meta name="description" content={data.site.siteMetadata.description} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <meta property="og:title" content={data.site.siteMetadata.title} />
       <meta property="og:type" content="website" />
       <meta property="og:description" content={data.site.siteMetadata.description} />
       <meta property="og:image" content={data.site.siteMetadata.image} />
       <meta property="og:locale" content="sr_RS" />
       <meta property="og:url" content={data.site.siteMetadata.url} />
       <link rel="canonical" href={data.site.siteMetadata.url} />
     </Helmet>
    <header className={styles.error}>
    <Banner title="Uuuuuups verovatno ste na pogrešnom putu">
      <Link to="/" className="btn-primary">
        Nazad na pocetnu
      </Link>
    </Banner>
  </header>
  </Layout>
)
export const query = graphql`
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
}
`
export default error