import React from "react"
import Layout from '../components/Layout'
import BlogList from '../components/Blog/BlogList'
import SEO from "../components/SEO"

const novosti = () => (
  <>
      <Layout>
      <SEO title="Crystalweed Srbija | Novosti" description="Crystalweed je kompanija koja se bavi prodajom legalnih proizvoda na bazi CBD-a" ></SEO>
   <BlogList />
  </Layout>
  </>
)

export default novosti
