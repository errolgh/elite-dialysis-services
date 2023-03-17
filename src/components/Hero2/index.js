import React from 'react'
import styled from 'styled-components';
import DesktopHero from '../../images/hero-image.png'
import MobileHero from '../../images/mobile-hero.jpg'
import NoWrap from '../NoWrap';
import Theme from '../../utils/globals/Theme';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  
  order: 2;
  
  @media (min-width: 768px) {
      background-color: #868280;
      background-image: linear-gradient(to right, #888481 , rgb(136, 132, 129, 0.2));
      order: 0;
      flex: 1;
      padding: 4rem;
      padding-left: 9rem;
      padding-right: 0;
      align-items: flex-start;
    }
    `;

const ImageContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex: 1.5;
  /* background-color: #827F7A; */
  /* padding: 2rem; */  
  img {
      height: 60vh;
      max-width: 100%;
      width: 100%;
      /* height: auto; */
      object-fit: cover;
      margin-bottom: 0;

      @media (min-width: ${Theme.breakpoints.md}px) {
          height: 100%;
      }
    /* object-fit: contain; */

  }

  @media (min-width: 768px) {
    /* padding: 4rem; */
  }
`;

const H1 = styled.h1`
  color: ${Theme.colors.black};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
  font-family: "dmsDisplay", Georgia, serif;
  
  @media (min-width: 768px) {
      color: ${Theme.colors.white};
    text-align: left;
  }

  span {
      color: #BEC920;
    }
`;

const P = styled.p`
    color: ${Theme.colors.black};
  @media (min-width: ${Theme.breakpoints.md}px) {
          color: ${Theme.colors.white};
}

  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Montserrat", monospace;
  /* color: ${Theme.colors.white}; */
  font-weight: 600;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Button = styled.button`
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
    background-color: ${Theme.colors.darkBlue};
  }
`;

const Line = styled.div`
    display: block;
    padding-top: 80px;
    border-bottom: 1px solid ${Theme.colors.eliteBlue};
    width: 80%;
    margin: 0 auto;
    /* color: ${Theme.colors.elitePurple}; */
    @media (min-width: ${Theme.breakpoints.md}px) {
        display: none;
    }
`;

const Hero2 = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <H1>Quality care for <NoWrap>better health</NoWrap></H1>
        <P>We provide top-notch dialysis services to ensure our patients receive the best care possible</P>
        <Button>Contact Us</Button>
        <Line />
      </TextContainer>
      <ImageContainer>
        <img src={DesktopHero} alt="Hero image" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero2;
