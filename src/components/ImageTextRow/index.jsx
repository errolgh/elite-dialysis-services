import React from 'react';
import styled from 'styled-components';

// Define the styled components for the image and text
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 40px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  width: 420px;
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 20px;
  text-align: justify;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
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