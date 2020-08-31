import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Compra Exitosa" />
    <h1>Gracias por elegirnos</h1>
    <p>Nos pondremos en contacto por correo electronico ventas@softyon.com</p>   
    <Link to="/">Regresar al inicio</Link>
  </Layout>
)

export default SecondPage
