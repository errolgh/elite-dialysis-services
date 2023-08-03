import * as React from "react"
// import Theme from "../utils/globals/Theme"
// import * as styles from "../components/index.module.css"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <main className="h-screen flex items-center justify-center">
        <div className="bg-white text-gray-700 rounded-lg lg:w-1/2 p-4 lg:p-16 w-10/12 shadow-lg">
          <h1 className="text-3xl pb-4">About Elite</h1>
          <p className="text-lg text-gray-700">
            Meet the Staff and Mission Statement coming soon.
          </p>
          <p className="text-lg text-gray-700">
            In the meantime, here are additional resources for services and care
            at Elite Dialysis&trade;:
          </p>
          <div className="flex justify-center">
            <a href={"/services"}>Elite&trade; Services</a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
