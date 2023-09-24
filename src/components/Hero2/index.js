import React from "react"
import styled from "styled-components"
import DesktopHero from "../../images/hero-image.png"
import NoWrap from "../NoWrap"
import Theme from "../../utils/globals/Theme"
import { Link } from "gatsby"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 2;
  padding: 2rem 0.85rem 1rem;

  @media (min-width: ${Theme.breakpoints.md}px) {
    background-color: #868280;
    background-image: linear-gradient(
      to right,
      #888481,
      rgb(136, 132, 129, 0.2)
    );
    order: 0;
    flex: 1;
    padding-top: 3rem;
    padding-left: 70px;
    padding-right: 0;
    align-items: flex-start;
  }

  @media (min-width: ${Theme.breakpoints.lg}px) {
    padding: 4rem;
    padding-right: 0;
  }

  @media (min-width: ${Theme.breakpoints.xl}px) {
    padding: 4rem;
    padding-left: 6rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1.5;
  img {
    height: 60vh;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    margin-bottom: 0;

    @media (min-width: ${Theme.breakpoints.md}px) {
      height: 100%;
    }
  }
`

const H1 = styled.h1`
  color: ${Theme.colors.black};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
  font-family: "dmsDisplay", Georgia, serif;

  @media (min-width: ${Theme.breakpoints.xs}px) {
    font-size: 2.5rem;
  }

  @media (min-width: ${Theme.breakpoints.sm}px) {
    font-size: 3rem;
  }

  @media (min-width: ${Theme.breakpoints.md}px) {
    color: ${Theme.colors.white};
    text-align: left;
    font-size: 1.8rem;
  }

  @media (min-width: ${Theme.breakpoints.lg}px) {
    font-size: 2.7rem;
  }

  span {
    color: #bec920;
  }
`

const P = styled.p`
  color: ${Theme.colors.black};
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Montserrat", monospace;
  font-weight: 600;
  font-size: 1em;
  text-align: center;

  @media (min-width: ${Theme.breakpoints.sm}px) {
    padding: 0 20px;
  }

  @media (min-width: ${Theme.breakpoints.md}px) {
    color: ${Theme.colors.white};
    font-size: 1rem;
    padding: 0;
    text-align: left;
  }

  @media (min-width: 768px) {
  }
`

// const Button = styled.button`
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
//     rgba(0, 0, 0, 0.05) 0px 5px 10px;
//   font-family: "Montserrat";
//   font-size: 1.2em;
//   padding: 15px 30px;
//   background-color: ${Theme.colors.eliteBlue};
//   color: ${Theme.colors.white};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: ${Theme.colors.darkBlue};
//   }
// `

const Line = styled.div`
  display: block;
  padding-top: 80px;
  border-bottom: 1px solid ${Theme.colors.eliteBlue};
  width: 80%;
  margin: 0 auto;
  @media (min-width: ${Theme.breakpoints.md}px) {
    display: none;
  }
`

const Hero2 = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <H1>
          Quality care for <NoWrap>better health</NoWrap>
        </H1>
        <P>
          We provide top-notch dialysis services to ensure our patients receive
          the best care possible
        </P>
        <Link to="/contact/">
          <button className="btn-primary">Contact Us</button>
        </Link>
        <Line />
      </TextContainer>
      <ImageContainer>
        <img src={DesktopHero} alt="Focused doctor" />
      </ImageContainer>
    </HeroContainer>
  )
}

export default Hero2
