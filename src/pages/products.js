import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import {SviProizvodi} from "../components/Products/SviProizvodi"
const products = () => (
  <>
     <Layout>
     <SEO title="Crystalweed Srbija | O nama" description="Crystalweed proizvodi pruzaju najbolje moguce rezultate. CBD ulja - CBD kreme - CBD cajevi - CBD pupuljci" ></SEO>
   <SviProizvodi />
  </Layout>
  </>
)

export default products
