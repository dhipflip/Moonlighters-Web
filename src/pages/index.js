import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Hero } from "../components/Hero/Hero.js"
import { Feature } from "../components/Feature/Feature.js"
import { Contact } from "../components/Contact/Contact.js"
import "../components/Layout/Layout"
import SEO from "../utils/seo"

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
