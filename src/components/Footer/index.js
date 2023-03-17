import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import Spectral from "../Spectral"
import Theme from '../../utils/globals/Theme';
import Logo from "../../images/hands-and-box.png";


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colors.lightGray};
  padding: 2rem 0rem;
  
  .logo {
    width: 75px;
    margin-bottom: 1rem;
    border-radius: 25px;
  }
  
  @media (min-width: ${Theme.breakpoints.md}px) {
    padding: 2rem 3rem;
    flex-direction: row;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${Theme.fonts.eliteSubTitle};
`;

const ContactInfo = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: ${Theme.fonts.eliteText};
  @media (min-width: ${Theme.breakpoints.lg}px) {
    text-align: left;
  }
`;

const List = styled.ul`
  list-style: none;
`;
  
const GoogleMapWidget = styled.iframe`
  border: none;
  width: 100%;
  @media (min-width: ${Theme.breakpoints.lg}px) {
    width: 34vw;
    height: 300px;
  }
`;

const FooterSubSection = styled.div`
  /* align-items: center; */
  @media (min-width: ${Theme.breakpoints.md}px) {
  }
`;

const zoomLevel = 14;
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
          55 Manchester Avenue<br />
          Lot 8 Fearon's Place<br />
          May Pen, Jamaica<br />
          (876) 203-5254<br />
          elitedialysisserviceltd@gmail.com
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
        <GoogleMapWidget src={mapSource} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
      </FooterSubSection>
      
    </FooterContainer>
    <Spectral />
  </>
);

export default Footer;