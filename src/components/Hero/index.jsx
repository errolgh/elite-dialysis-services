import styled from 'styled-components';
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
// should i make an assets folder/what is best for gatsby
import SiteHero from '../../images/dialysis-hero.jpg'
// import { MdKeyboardArrowRight } from 'react-icons/md';
import Theme from '../../utils/globals/Theme';


// - make global variables for colors, sizes, animations etc.
// - mobile-first design will make desktop easier. create a mobile hero first. try watching KP video on background-images.
// - add tint to hero image


const Section = styled.section`
    background-image: url(${SiteHero});
    display: block;
    height: 90vh;
    min-height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 4em;
    z-index: 1000;
    position: absolute;
    top:0;
    /* background-position: 100%; */
    /* object-fit: cover; */
    
    /* @media (max-width: 768px) {
        display: block;
    } */
`;

const Content = styled.div`
//   width: 100%;
//   height: 100px;
width: 50%;
padding: 50px;
padding-left: 200px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 55px;
  padding-top: 3em;
  color: ${Theme.colors.white};
  font-weight: 600;
  font-family: "dmsDisplay", Georgia, serif;
`;

const Desc = styled.p`
  font-family: "Montserrat", monospace;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 auto;
  color: ${Theme.colors.white};
  margin-bottom: 40px;
  span {
    color: #54a2c4;
  }
`;

const Button = styled.button`
  /* display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 310px;
  height: 71px;
  line-height: 71px;
  font-size: 18px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%); */
  
  font-family: "Montserrat";
  font-size: 1.2em;
  padding: 15px 30px;
  background-color: #00bfff;
  color: #fff;
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
            Quality care for<br/>
            <span> better health</span>
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