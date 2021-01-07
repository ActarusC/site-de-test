import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import imagePrinc from "../images/gatsby-astronaut2.png"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi test</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      <img src={imagePrinc} />
    </div>
    <Link to="/doc">Voir la doc</Link>
  </Layout>
)



export default IndexPage
