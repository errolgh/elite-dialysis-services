import styled from 'styled-components';
import React from 'react';
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
// should i make an assets folder/what is best for gatsby
// import { MdKeyboardArrowRight } from 'react-icons/md';
import DesktopHero from '../../images/dialysis-hero.jpg'
import MobileHero from '../../images/mobile-hero.jpg'
import Theme from '../../utils/globals/Theme';
import NoWrap from '../NoWrap';


// - make global variables for colors, sizes, animations etc.
// - mobile-first design will make desktop easier. create a mobile hero first. try watching KP video on background-images.
// - add tint to hero image


const Section = styled.section`
  display: block;
  background-image: url(${MobileHero});
  /* ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  } */
  height: 40vh;
  width: 100%;
  object-fit: contain;
  /* width: 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1000;
  
  @media (min-width: ${Theme.breakpoints.md}px){
    background-image: url(${DesktopHero});
    height: 90vh;
    min-height: 600px;
  };
`;

const Content = styled.div`
  @media (min-width: ${Theme.breakpoints.lg}px) {
    width: 50%;
    padding: 50px;
    padding-left: 200px;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  padding-top: 4rem;
  text-align: center;
  margin-bottom: 0;

  @media (min-width: ${Theme.breakpoints.md}px) {
    font-size: 4vw;
    padding-top: 8.5rem;
    text-align: left;
  }

  @media (min-width: ${Theme.breakpoints.xxl}px) {
    font-size: 56px;
  }

  color: ${Theme.colors.white};
  font-weight: 600;
  font-family: "dmsDisplay", Georgia, serif;

  span {
      color: #BEC920;
    }
`;

const Desc = styled.p`
  font-family: "Montserrat", monospace;
  color: ${Theme.colors.white};
  font-weight: 600;
  font-size: 1rem;
  padding: 20px;
  
  @media (min-width: ${Theme.breakpoints.md}px) {
    line-height: 30px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media (min-width: ${Theme.breakpoints.xxl}px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  /* background: linear-gradient(90deg, #0546d6, #3f89fc); */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  font-family: "Montserrat";
  font-size: 1.2em;
  padding: 15px 30px;
  background-color: ${Theme.colors.eliteBlue};
  color: ${ Theme.colors.white };
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #008080;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Content>
          <Title>
            <NoWrap>Quality care for</NoWrap>
            <NoWrap><span>Better health</span></NoWrap>
          </Title>
          <Desc>
          We provide top-notch dialysis services to ensure our patients receive the best care possible.
          </Desc>
          <Button href='https://google.com' target='_blank'>
            <span>Contact Us</span>
            {/* <MdKeyboardArrowRight /> */}
          </Button>
      </Content>
    </Section>
  );
};

export default Hero;