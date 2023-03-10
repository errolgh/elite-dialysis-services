import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
  const GoogleMapWidget = styled.iframe`
    border: none;
    width: 600px;
    height: 300px;
    `;

const zoomLevel = 14;
const mapSource = `https://maps.google.com/maps?q=55%20Manchester%20Avenue,%20May%20Pen,%20Jamaica&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`

const Footer = () => (
  <FooterContainer>
    <Logo src="logo.svg" alt="Company Logo" />
    <CompanyName>Medical Dialysis Company</CompanyName>
    <ContactInfo>
      123 Main Street<br />
      Anytown, USA 12345<br />
      (555) 555-5555<br />
      info@medicaldialysis.com
    </ContactInfo>
    <>
        <h2>is a footer</h2>
        <GoogleMapWidget src={mapSource} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
    </>
  </FooterContainer>
);

export default Footer;