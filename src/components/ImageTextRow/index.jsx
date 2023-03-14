import React from 'react';
import styled from 'styled-components';
import Theme from "../../utils/globals/Theme";

// Define the styled components for the image and text
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const Image = styled.img`
  width: 50%;
  height: 60vh;
  object-fit: cover;
  /* padding: 50px; */
  /* padding-right: 1px;
  padding-bottom: 1px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const TextWrapper = styled.div`
  width: 40%;
  padding: 0 50px;
  margin: 0 auto;
  text-align: justify;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: ${Theme.fonts.eliteText};
`;

// Define the component that uses the image and text styled components
const ImageTextRow = ({ imageSrc, title, description }) => {
  return (
    <Wrapper>
      <Image src={imageSrc} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default ImageTextRow;