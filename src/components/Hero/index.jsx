import styled from 'styled-components';
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
// import BgImg from '../assets/bg-image.png'; should i make an assets folder/what is best for gatsby
import BgImg from '../../images/dialysis-machines.jpg'
// import { MdKeyboardArrowRight } from 'react-icons/md';


// - make global variables for colors, sizes, animations etc.
// - mobile-first design will make desktop easier. create a mobile hero first. try watching KP video on background-images.
// - add tint to hero image


const Section = styled.section`
    background-image: url(${BgImg});
    display: block;
    height: 70vh;
    min-height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 4em;
    /* background-position: 100%; */
    /* object-fit: cover; */
    
    @media (max-width: 768px) {
        
    }
`;

const Content = styled.div`
//   width: 100%;
//   height: 100px;
`;

const Title = styled.h1`
  font-size: 35px;
  padding-top: 3em;
  color: #333;
  font-weight: 600;

`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 auto;

  span {
    color: #54a2c4;
  }
`;

const Button = styled.a`
  display: flex;
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
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
          <Title>
            Elite Dialysis Services
          </Title>
          <Desc>
            Under Construction
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