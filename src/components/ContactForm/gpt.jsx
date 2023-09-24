// Make sure to replace 'https://getform.io/f/your_getform_endpoint' with your actual Getform endpoint. Getform will provide you with an endpoint where the form data should be submitted.

// This is a basic example, and you can further customize and improve it based on your specific needs, such as adding more fields, handling API responses, adding error messages, and enhancing user experience.

// Note: In a real production application, you should consider implementing proper error handling, possibly using some state management library (like Redux or React Context), and adding additional security measures (such as using environment variables for sensitive data). Additionally, you may want to implement server-side validation and sanitization to ensure data integrity.

// look for custom form confirmation page tut

// https://getform.io/

// or ... https://formsubmit.co/. Seems simpler and free?

import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
})

// const onSubmit = async (values, { resetForm, setSubmitting }) => {
//   try {
//     const response = await axios.post(
//       "https://getform.io/f/your_getform_endpoint",
//       values
//     )
//     console.log("Email sent successfully!", response)
//     resetForm()
//   } catch (error) {
//     console.error("Error sending email:", error)
//   }
//   setSubmitting(false)
// }

const ContactForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
