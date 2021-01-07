import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
      <StaticImage src="../images/gatsby-astronaut.png" alt="Un peu de texte" width={300} />
    </div>
    <Link to="/doc">Voir la doc</Link>
  </Layout>
)



export default IndexPage
