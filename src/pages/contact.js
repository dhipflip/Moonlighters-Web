import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>We're ready</p>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default ContactPage
