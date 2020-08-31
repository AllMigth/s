import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkout from "../components/checkout"
import Image from "../components/image"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Compra asesoria personalizada</h1>
    <p>Bienvenido a la SoftYon Store.</p>
    <p>Ahora vayamos a construir algo grande.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Checkout/>

  </Layout>
)

export default IndexPage
