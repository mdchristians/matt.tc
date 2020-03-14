import React from "react"
import { Styled } from "theme-ui"
import Layout from "./Layout"

export const PageWrapper = ({ element }) => (
  <Layout>
    <Styled.root>{element}</Styled.root>
  </Layout>
)