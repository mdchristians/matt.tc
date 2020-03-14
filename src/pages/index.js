import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const IndexPage = props => (
  <Layout>
    <Seo {...props} />
    <Hero />
  </Layout>
)

export default IndexPage
