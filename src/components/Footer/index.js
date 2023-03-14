import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import Spectral from "../Spectral"
import Theme from '../../utils/globals/Theme';
import Logo from "../../images/hands-and-box.png";


const FooterContainer = styled.footer`
  background-color: ${Theme.colors.lightGray};
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 75px;
    margin-bottom: 1rem;
    border-radius: 25px;
  }
`;

const FooterHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${Theme.fonts.eliteSubTitle};
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  font-family: ${Theme.fonts.eliteText};
`;

const List = styled.ul`
  list-style: none;
`;
  
const GoogleMapWidget = styled.iframe`
  border: none;
  width: 600px;
  height: 300px;
`;

const zoomLevel = 14;
const mapSource = `https://maps.google.com/maps?q=55%20Manchester%20Avenue,%20May%20Pen,%20Jamaica&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`

const Footer = () => (
  <>
    <FooterContainer>
      <div>
        <img className="logo" src={Logo} alt="Company Logo" />
      </div>
      <div>
        <FooterHeading>Contact Info</FooterHeading>
        <ContactInfo>
          55 Manchester Avenue<br />
          Lot 8 Fearon's Place<br />
          May Pen, Jamaica<br />
          (876) 203-5254<br />
          elitedialysisserviceltd@gmail.com
        </ContactInfo>
      </div>
      <div>
        <FooterHeading>Hours of Operation</FooterHeading>
        <ContactInfo>
          <List>
            <li>Mon-Sat: 5:00AM - 5:00PM</li>
            <li>Sun: Closed</li>
          </List>
        </ContactInfo>
      </div>
      <div>
        <FooterHeading>Location</FooterHeading>
        <GoogleMapWidget src={mapSource} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
      </div>
    </FooterContainer>
    <Spectral />
  </>
);

export default Footer;