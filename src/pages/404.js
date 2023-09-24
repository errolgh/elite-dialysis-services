import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex items-center w-10/12 lg:w-1/2 bg-white flex-col mx-auto mt-6">
      <h1 className="text-black-900">404: Not Found</h1>
      <p className="text-grey-600">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
      <button className="btn-primary">Back to Home Page</button>
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
