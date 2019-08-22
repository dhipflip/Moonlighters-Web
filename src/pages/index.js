import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Moonlighters" />
    <imgs></imgs>
    <h1>Moonlighters</h1>
    <p>This is the new Moonlighters website.</p>
    <Link to="/contact/">Contact Page</Link>
  </Layout>
)

export default IndexPage
