import * as React from "react"
// import Theme from "../utils/globals/Theme"
// import * as styles from "../components/index.module.css"

import Layout from "../components/layout"

const Success = () => {
  return (
    <Layout>
      <main className="h-screen flex items-center justify-center">
        <div className="bg-white text-gray-700 rounded-lg lg:w-1/2 p-4 lg:p-16 w-10/12 shadow-lg">
          <h1 className="text-3xl pb-4">Submission Confirmed.</h1>
          <p className="text-lg text-gray-700">
            Your form was successfully submitted. Please allow up to 72 hours
            for our team to reach out to you with the information you've
            provided.
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

export default Success
