import React from "react"
import styled from "styled-components"
import Theme from "../../utils/globals/Theme"
import Logo from "../../images/hands-and-box.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
  padding: 60px 24px;
  background-color: ${({ background }) =>
    background ? Theme.colors.white : background};
`

const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 25px;
  max-width: 45px;

  @media (min-width: ${Theme.breakpoints.xs}px) {
    max-width: 75px;
  }
`

const StyledHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  font-family: "Oswald", monospace;
  color: ${Theme.colors.black};
  margin-bottom: 12px;

  @media (min-width: ${Theme.breakpoints.xs}px) {
    margin-bottom: 24px;
    font-size: 28px;
  }

  @media (min-width: ${Theme.breakpoints.sm}px) {
    margin-bottom: 24px;
    font-size: 38px;
  }
`

const StyledText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Montserrat", monospace;
  color: ${Theme.colors.black};
  line-height: 1.6;

  @media (min-width: ${Theme.breakpoints.xs}px) {
    font-size: 18px;
  }

  @media (min-width: ${Theme.breakpoints.sm}px) {
    font-size: 22px;
  }
`

const WelcomeCallOut = ({ headerText, bodyText, background }) => {
  return (
    <Container style={{ backgroundColor: background }}>
      <StyledImage src={Logo} />
      <StyledHeader>{headerText}</StyledHeader>
      <StyledText>{bodyText}</StyledText>
    </Container>
  )
}

export default WelcomeCallOut
