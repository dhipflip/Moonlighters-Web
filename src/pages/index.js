import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Hero } from "../components/hero/hero.js"
import { Feature } from "../components/feature/feature.js"
import { Contact } from "../components/contact/contact.js"
import "../styles/layout.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Moonlighters" />
    <Link to="/blog/">Blog Page</Link>
    <Hero/>
    <Feature/>
    <Contact/>
  </Layout>
)

export default IndexPage
