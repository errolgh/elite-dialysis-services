import * as React from "react"
import { Link } from "gatsby"
import female from "../images/pro-female.jpg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import male from "../images/pro-male.jpg"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <section className="pt-24 mb-20 p-6 mx-auto max-w-lg md:max-w-xl lg:max-w-3xl">
        <h1 className="text-4xl font-bold mb-2 font-display">
          About Elite Dialysis
        </h1>

        <div className="h-2 bg-gradient-to-r from-eliteBlue to-transparent"></div>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          Our Commitment to Quality Care
        </h2>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          At Elite, we are dedicated to providing the highest standard of care
          to individuals facing these challenges. Our unwavering commitment to
          quality care is at the heart of everything we do.
        </p>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          From the moment you walk through our doors, you can trust that you are
          in capable hands. We strive for excellence in all aspects of our care,
          aiming to improve your quality of life and provide you with the
          support you need to thrive.{" "}
        </p>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          Discover the difference that quality care can make at Elite Dialysis.{" "}
          <Link to="/contact" className="no-underline hover:underline">
            <b className="font-semi text-eliteGreen">Contact us</b>.
          </Link>
        </p>

        <h2 className="text-2xl font-bold mt-16 mb-2">
          Our Services and Treatment Options
        </h2>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          We offer a comprehensive range of dialysis services and treatment
          options designed to cater to your specific needs. Our commitment to
          providing the best care includes staying at the forefront of medical
          technology and offering innovative solutions for related health.
        </p>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          We understand that every patient is unique, and we work with you to
          create a personalized treatment plan that fits your lifestyle and
          medical requirements. Your journey to better kidney health starts
          here, with a comprehensive range of services and a team of experts who
          truly care about your well-being.
        </p>
        <p className="text-gray-700 font-body font-bold text-lg/loose md:text-xl/loose">
          Our services include:
        </p>
        <ul className="m-0 font-semi mb-10 text-xl">
          <AnchorLink to="/services#hemodialysis" className="no-underline hover:underline">
            <li>Hemodialysis</li>
          </AnchorLink>

          <AnchorLink to="/services#peritoneal-dialysis" className="no-underline hover:underline">
            <li>Peritoneal Dialysis</li>
          </AnchorLink>

          <AnchorLink to="/services#home-dialysis-training" className="no-underline hover:underline">
            <li>Home Dialysis Training</li>
          </AnchorLink>

          <AnchorLink to="/services#nutritional-counseling" className="no-underline hover:underline">
            <li>Nutritional Counseling</li>
          </AnchorLink>

          <AnchorLink to="/services#medication-management" className="no-underline hover:underline">
            <li>Medication Management</li>
          </AnchorLink>

          <AnchorLink to="/services#social-work-services" className="no-underline hover:underline">
            <li>Social Work Services</li>
          </AnchorLink>

          <AnchorLink to="/services#transportation-assistance" className="no-underline hover:underline">
            <li>Transportation Assistance</li>
          </AnchorLink>
        </ul>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          Experience the difference of comprehensive kidney care at Elite
          Dialysis.{" "}
          <Link to="/contact" className="no-underline hover:underline">
            <b className="font-semi text-eliteGreen">Contact us</b>.
          </Link>
        </p>
        <h2 className="text-2xl font-bold mt-16 mb-2">Meet Our Team</h2>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          Behind every successful treatment is a team of dedicated professionals
          who are passionate about your health.
        </p>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          Our healthcare professionals are not only experts in the field of
          nephrology and dialysis but are also compassionate individuals who
          understand the unique challenges you may be facing. With a wealth of
          experience and a commitment to ongoing education, our team stays at
          the forefront of medical advancements to ensure you receive the best
          possible care.
        </p>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose">
          We believe in treating you like family, providing personalized care
          that addresses your individual needs and concerns. Get to know the
          faces behind your care and trust that you're in capable, caring hands
          with the team at Elite.
        </p>

        {/* Meet the Team Container */}
        <div className="flex flex-col items-center my-24">
          {/* Member 1 */}
          <div className="flex flex-col">
            {/* Member Avatar */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <img className="shadow-md" src={female} alt="" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl">
                  Marcia Stewart
                </h3>
                <div className="h-2 bg-gradient-to-r from-eliteBlue to-transparent"></div>
                <p className="leading-6 text-gray-700 font-body text-lg/loose md:text-2xl/loose">
                  Director of Patient Services
                </p>
              </div>
            </div>
            {/* Member Bio */}
            <div>
              <p className="text-gray-700 font-body text-lg md:text-xl italic">
                A driving force at Elite, hailing from Frankfield, Marcia has
                over 40 years of experience in professional and private patient
                care across the Uninted States and Jamaica. Highly respected in the healthcare community, she is known
                for her wealth of knowledge and a commitment to proper patient
                care protocol.
              </p>
              <p className="text-gray-700 font-body text-lg md:text-xl italic">
                She leads a team that stays at the forefront of dialysis
                advancements. Her mission is to provide cutting-edge treatments
                and compassionate support, making a positive impact on the lives
                of Maypenners.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center my-24">
          {/* Member 2 */}
          <div className="flex flex-col">
            {/* Member Avatar */}
            <div className="flex space-x-4">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl">
                  Kemesha Saloni Jones
                </h3>
                <div className="h-2 bg-gradient-to-r from-eliteBlue to-transparent"></div>
                <p className="text-gray-700 font-body text-lg/loose md:text-2xl/loose">
                  Office Manager
                </p>
              </div>
              <div className="w-1/2">
                <img className="shadow-md" src={female} alt="" />
              </div>
            </div>
            {/* Member Bio */}
            <div>
              <p className="text-gray-700 font-body text-lg md:text-xl italic">
                A strong business professional with a B.Sc. in Accounting
                focused in Social Sciences from University of the West Indies,
                Mona Campus, Miss Kay leverages her expertise to efficiently
                manage office operations.
              </p>
              <p className="text-gray-700 font-body text-lg md:text-xl italic">
                With a proven track record of enhancing workflow and fostering a
                collaborative work environment, she ensures that the office runs
                smoothly and effectively. Miss Kay's dedication to excellence
                and her knack for streamlining processes make her an
                indispensable asset to our team.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-16 mb-2">Our Mission</h2>
        <p className="text-gray-700 font-body text-lg/loose md:text-xl/loose italic font-bold">
          "Our mission is simple– to provide the best quality dialysis service.
          We value equality, inclusion and dignity to all. Never compromising
          safety, quality, or the health of our patients. Never forget to
          respect and support our teammates."
        </p>
        <div className="w-1/2 lg:w-1/3 mx-auto"></div>
        <div className="h-2 bg-gradient-to-r from-eliteBlue to-transparent"></div>
      </section>
    </Layout>
  )
}

export default About
