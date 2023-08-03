import DesktopHero from "../../images/hero-image.png"
import React, { useState } from "react"
import styled from "styled-components"
import Theme from "../../utils/globals/Theme"
import termsOfService from "../../utils/data/termsofservice"
import Button from "../../components/Button/Button"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${Theme.colors.eliteBlue};
  margin-bottom: 10rem;
`

const StyledForm = styled(Form)`
  display: flex;
  background: white;
  border-radius: 0.5rem;
  width: 75%;
  font-family: ${Theme.fonts.eliteSubTitle};
  font-size: 24px;
  font-weight: 600;
`

const SplitLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: gray;
  font-weight: 700;
  padding: 20px;
`

const SplitRight = styled.div`
  display: flex;
  flex: 1;
  color: gray;
  img {
    object-fit: cover;
  }
`

const H1 = styled.h1`
  font-size: 36px;
  /* padding-bottom: 32px; */
  font-family: ${Theme.fonts.eliteSubTitle};
  font-weight: 700;
  margin-bottom: 16px;
`

const P = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-family: ${Theme.fonts.eliteText};

  a {
  }
`

const P2 = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: ${Theme.text.xs}px;
  font-weight: 600;
  font-family: ${Theme.fonts.eliteText};
  width: 75%;
`

const SomeDiv = styled.div`
  margin-top: 1.5rem;
`

const LabelDiv = styled.div`
  padding-bottom: 1rem;
`

const Label = styled.label.attrs({
  className: "Label",
})`
  display: block;
  font-family: ${Theme.fonts.eliteSubTitle};
  font-size: ${Theme.text.md}px;
  /* padding-bottom: 0.5rem; */

  .error-message {
    color: crimson;
  }
`

const Input = styled(Field)`
  border-width: 0.2rem;
  border-color: gray;
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 50%;
  :focus {
    outline: none;
    outline-offset: 0;
    outline-style: none;
    box-shadow: none;
    border-color: #11e9e9;
  }
`
const Select = styled.select`
  border-width: 0.2rem;
  border-color: gray;
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 50%;
  :focus {
    outline: none;
    outline-offset: 0;
    outline-style: none;
    box-shadow: none;
    border-color: #11e9e9;
  }
`

const Textarea = styled.textarea`
  border-width: 0.2rem;
  border-color: gray;
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 50%;
  :focus {
    outline: none;
    outline-offset: 0;
    outline-style: none;
    box-shadow: none;
    border-color: #11e9e9;
  }
`

const Checkbox = styled.input`
  border-width: 0.2rem;
  height: 1.5rem;
  width: 1.5rem;
  :focus {
    outline: none;
    outline-offset: 0;
    outline-style: none;
    box-shadow: none;
    border-color: #11e9e9;
  }
  :hover {
    border-color: #11e9e9;
  }
  :checked {
    accent-color: #11e9e9;
  }
`

const CheckboxContainer = styled.div`
  padding-right: 10px;
`

const Tos = styled.div`
  display: flex;
`

const SButton = styled(Button)`
  width: 100%;
`

const SubmitDiv = styled.div`
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content:center; */
`

const initialValues = {
  name: "",
  email: "",
  country: "Jamaica",
  telephone: "",
  message: "",
  terms: "",
}

const Error = styled.span`
  color: red;
`

const onSubmit = values => {
  console.log("Form data: ", values)
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  country: Yup.string().required("Country is required"),
  termsOfService: Yup.boolean().oneOf(
    [true],
    "You must accept the terms of service"
  ),
})

const countries = [
  "Jamaica",
  "Trinidad and Tobago",
  "Barbados" /* Add more Caribbean countries here */,
]

// const validate = values => {
//   let errors = {}

//   if (!values.name) {
//     errors.name = "Required"
//   }

//   if (!values.email) {
//     errors.email = "Required"
//   }

//   if (!values.country) {
//     errors.country = "Required"
//   }

//   if (!values.terms) {
//     errors.terms = "Required"
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address"
//   }

//   return errors
// }

// CONSIDER FORMIK'S BUILT-IN FORM VALIDATION
const OldContactForm = () => {
  // Formic Logic
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //   })

  // console.log("formik.errors: ", formik.errors)
  // console.log("formik.values: ", formik.values)

  const handleError = () => {
    return (
      <Error>
        Your submission was not sent, check your form for required fields marked
        with a asterisk (*)
      </Error>
    )
  }

  const [errorMessage, setErrorMessage] = useState(false)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* <h3>Call, reachout, visit</h3> */}
      {/* consider a brand-green background color for this page */}
      <Main>
        <StyledForm>
          <SplitLeft>
            <H1>Let's Get Started! 🚀</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              aspernatur velit distinctio
            </P>
            {errorMessage ? handleError() : null}
            <SomeDiv>
              {/* name input field */}
              <LabelDiv>
                <Label htmlFor="name">
                  Name <ErrorMessage name="name" />
                </Label>
                <Input
                  //   value={formik.values.name}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </LabelDiv>
              <LabelDiv>
                {/* email input field */}
                <Label htmlFor="email">
                  Email <ErrorMessage name="email" />
                </Label>
                <Input
                  //   value={formik.values.email}
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}

                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </LabelDiv>
              {/* country input field */}
              <LabelDiv>
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  type="text"
                  name="country"
                >
                  {/* replace with country select library */}
                  {/* https://javascript.plainenglish.io/create-a-country-select-component-with-react-2021-a259bd0350d5 */}
                  <option>Jamaica</option>
                  <option>Barbados</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </Select>
              </LabelDiv>
              {/* telephone input field */}
              <LabelDiv>
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  value={formik.values.telephone}
                  onChange={formik.handleChange}
                  type="text"
                  name="telephone"
                  placeholder="Enter your Name"
                />
              </LabelDiv>
              {/* message textarea */}
              <LabelDiv>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  type="textarea"
                  name="message"
                  placeholder="Enter your Name"
                />
              </LabelDiv>
              {/* terms of service checkbox */}
              <LabelDiv>
                <Label htmlFor="terms">
                  Terms of service <ErrorMessage name="terms" />
                </Label>

                <Tos>
                  <CheckboxContainer>
                    <Checkbox
                      //   onChange={formik.handleChange}
                      //   value={formik.values.terms}
                      //   onBlur={formik.handleBlur}
                      type="checkbox"
                      name="terms"
                      // value="checked"
                    />
                  </CheckboxContainer>
                  <P2>
                    By submitting your message, you acknowledge that you have
                    read and agreed to these terms.
                  </P2>
                </Tos>
              </LabelDiv>
              <SubmitDiv>
                {/* might have to make an inline style button due to `type="submit" error` */}
                <SButton type={"submit"} onSubmit>
                  Submit
                </SButton>
              </SubmitDiv>
            </SomeDiv>
          </SplitLeft>
          <SplitRight>
            {/* <img src={DesktopHero} alt={"Welcoming doctor"} /> */}
          </SplitRight>
        </StyledForm>
      </Main>
    </Formik>
  )
}

export default OldContactForm
