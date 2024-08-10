import React from "react"
import styled from "styled-components"
import Theme from "../../utils/globals/Theme"

const Container = styled.div`
  background-color: ${Theme.colors.lightGray};
  padding-left: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 0.9rem;

  a {
    @media (min-width: ${Theme.breakpoints.sm}px) {
      font-size: 16px;
    }
    color: ${Theme.colors.black};
    font-family: ${Theme.fonts.eliteSubTitle};
    text-decoration: none;

    &:hover {
      color: ${Theme.colors.eliteBlue};
      transition: color 0.3s ease;
    }
  }
`

export default function Spectral() {
  return (
    <>
      <Container>
        <a
          href="https://www.gratefulwebdesigns.com/"
          rel="noreferrer"
          target="_blank"
        >
          Powered by &copy; Grateful Web Designs
        </a>
      </Container>
    </>
  )
}
