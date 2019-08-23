import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Moonlighters Blog" />
    <h1>We have a lot to say</h1>
    <p>and here is where we want to share.</p>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default BlogPage