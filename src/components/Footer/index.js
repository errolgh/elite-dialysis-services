import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import Spectral from "../Spectral"
import Theme from '../../utils/globals/Theme';


const FooterContainer = styled.footer`
  background-color: ${Theme.colors.lightGray};
  padding: 2rem;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  /* align-items: center; */

`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
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
        <Logo src="logo.svg" alt="Company Logo" />
      </div>
      <div>
        <CompanyName>Contact Info</CompanyName>
        <ContactInfo>
          55 Manchester Avenue<br />
          Lot 8 Fearon's Place<br />
          May Pen, Jamaica<br />
          (876) 203-5254<br />
          elitedialysisserviceltd@gmail.com
        </ContactInfo>
      </div>
      <div>
        <CompanyName>Hours of Operation</CompanyName>
        <ContactInfo>
          <List>
            <li>Mon-Sat: 5:00AM - 5:00PM</li>
            <li>Sun: Closed</li>
          </List>
        </ContactInfo>
      </div>
      <div>
        <CompanyName>Location</CompanyName>
        <GoogleMapWidget src={mapSource} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
      </div>
    </FooterContainer>
    <Spectral />
  </>
);

export default Footer;