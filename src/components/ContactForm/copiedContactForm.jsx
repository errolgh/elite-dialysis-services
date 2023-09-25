import React from "react"
import DesktopHero from "../../images/hero-image.png"
import Theme from "../../utils/globals/Theme"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { navigate } from "gatsby"

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  country: Yup.string(),
  telephone: Yup.string().matches(
    phoneRegExp,
    "Phone number is not valid, only use numbers."
  ),
  termsOfService: Yup.boolean().oneOf(
    [true],
    "You must accept the terms of service"
  ),
})

const countries = [
  "Jamaica",
  "United States",
  "Trinidad and Tobago",
  "Barbados",
]

const FormComponent = () => {
  const handleSubmit = (values, { resetForm }) => {
    // some fetch call. use async emailjs type thing
    // Handle form submission here
    resetForm() // do something with form values
    navigate("/success/") // navigate to success page
  }

  return (
    <section id="reach-out-today" className="px-6 mt-10 max-w-md mx-auto lg:max-w-5xl mb-16 lg:mb-32">
      {/* Imperative Text */}
      <div className="mt-10">
        <h1 className="font-heading text-2xl font-bold lg:text-4xl lg:mx-0">
          Reach out <span className="text-eliteGreen">today</span>.
        </h1>
        <p className="font-body lg:text-xl">
          Take the first step towards better health today. Fill out this form
          and a member from our qualified team will contact you regarding
          personalized treatment options.
        </p>
      </div>
      {/* Form / Hero Container */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10">
        {/* Form */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            country: "Jamaica",
            telephone: "",
            message: "",
            termsOfService: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mx-auto mb-0 mt-8 space-y-4 font-body">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="form-input w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johncrow@example.com"
                  className="form-input w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="form-select w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="telephone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Telephone
                </label>
                <Field
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="1234567890"
                  className="form-input w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="You may leave us a message"
                  className="form-textarea resize-none w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="termsOfService" className="flex items-center">
                  <Field
                    type="checkbox"
                    id="termsOfService"
                    name="termsOfService"
                    className="form-checkbox rounded-sm border-gray-200 p-2 text-sm shadow-sm"
                  />
                  <span className="ml-2">
                    By submitting your message, you acknowledge that you have
                    read and agreed to these terms.
                  </span>
                </label>
                <ErrorMessage
                  name="termsOfService"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                className="btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/* Contact Hero Image */}
        <div className="mt-10 lg:mt-0">
          <img
            alt="A welcoming doctor"
            src={DesktopHero}
            className=" rounded-md shadow-lg lg:m-0"
          />
        </div>
      </div>
    </section>
  )
}

export default FormComponent
