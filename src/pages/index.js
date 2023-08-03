import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as styles from "../components/index.module.css"
// import Hero from "../components/Hero"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero2 from "../components/Hero2"
import WelcomeCallOut from "../components/WelcomeCallOut"
import ServicesOffered from "../components/ServicesOffered"
import ImageTextRow from "../components/ImageTextRow"

import Theme from "../utils/globals/Theme"
import TestimonialSlider from "../components/TestimonialCarousel"

import centerLocation from "../images/dialysis-location.jpg"
import { IoLocationSharp } from "react-icons/io5"

const welcomeText = `We are focused on providing high-quality treatment to our patients. Our facility offers hemodialysis, information on kidney disease and hemodialysis, and resources to support patients and their families. Our experienced medical professionals are dedicated to providing personalized care to improve the quality of life for our patients.`

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Hero2 />
    <WelcomeCallOut
      //  src={Logo}
      alt="hands holding kidneys"
      headerText={`Welcome to Elite Dialysis`}
      bodyText={welcomeText}
    />
    <ServicesOffered background={Theme.colors.lightGray} />
    <ImageTextRow
      imageSrc={centerLocation}
      title={
        <>
          <IoLocationSharp color="red" size="2rem" />
          <span> May Pen, Jamaica</span>
        </>
      }
      description="Our dialysis center is situated in the heart of May Pen, Jamaica, and is easily accessible from route A2. We are conveniently located near major transportation routes, making it easy for our patients to reach us. Ideal for patients who need care without having to travel far from home. You can rest assured that you are receiving the best possible care in the May Pen area."
    />
    <TestimonialSlider />
  </Layout>
)
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
