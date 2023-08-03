import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Spectral from "../Spectral"
import Theme from "../../utils/globals/Theme"
import Logo from "../../images/hands-and-box.png"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Theme.colors.lightGray};
  align-items: center;
  padding: 2rem 0rem;

  .logo {
    width: 75px;
    margin-bottom: 1rem;
    border-radius: 25px;
  }

  @media (min-width: ${Theme.breakpoints.md}px) {
    align-items: flex-start;
    padding: 2rem 3rem;
    flex-direction: row;
  }
`

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: ${Theme.fonts.eliteSubTitle};

  @media (min-width: ${Theme.breakpoints.md}px) {
  }

  @media (min-width: ${Theme.breakpoints.lg}px) {
    text-align: left;
  }
`

const ContactInfo = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: ${Theme.fonts.eliteText};

  @media (min-width: ${Theme.breakpoints.lg}px) {
    text-align: left;
  }
`

const List = styled.ul`
  list-style: none;
  margin-left: 0;
`

const GoogleMapWidget = styled.iframe`
  border: none;
  width: 100%;
  @media (min-width: ${Theme.breakpoints.lg}px) {
    width: 34vw;
    height: 300px;
  }
`

const FooterSubSection = styled.div`
  @media (min-width: ${Theme.breakpoints.md}px) {
  }
`

const zoomLevel = 14
const mapSource = `https://maps.google.com/maps?q=55%20Manchester%20Avenue,%20May%20Pen,%20Jamaica&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`

const Footer = () => (
  <>
    <FooterContainer>
      <FooterSubSection>
        <img className="logo" src={Logo} alt="Company Logo" />
      </FooterSubSection>

      <FooterSubSection>
        <FooterHeading>Contact Info</FooterHeading>
        <ContactInfo>
          <List>
            <li>55 Manchester Avenue</li>
            <li>Lot 8 Fearon's Place</li>
            <li>May Pen, Jamaica</li>
            <li>(876) 203-5254</li>
            <li>elitedialysisserviceltd@gmail.com</li>
          </List>
        </ContactInfo>
      </FooterSubSection>

      <FooterSubSection>
        <FooterHeading>Hours of Operation</FooterHeading>
        <ContactInfo>
          <List>
            <li>Mon-Sat: 5:00AM - 5:00PM</li>
            <li>Sun: Closed</li>
          </List>
        </ContactInfo>
      </FooterSubSection>

      <FooterSubSection>
        <FooterHeading>Location</FooterHeading>
        <GoogleMapWidget
          src={mapSource}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </FooterSubSection>
    </FooterContainer>
    <Spectral />
  </>
)

export default Footer
