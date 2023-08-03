import React from "react"
import styled from "styled-components"
import Theme from "../../utils/globals/Theme"

// Define the styled components for the image and text
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  padding: 0 2.5rem;

  @media (min-width: ${Theme.breakpoints.md}px) {
    flex-direction: row;
  }
`

const Image = styled.img`
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  order: 1;
  width: 100%;
  height: 40vh;

  @media (min-width: ${Theme.breakpoints.md}px) {
    width: 50%;
    height: 70vh;
    order: 2;
  }
`

const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 20px 20px;
  @media (min-width: ${Theme.breakpoints.md}px) {
    width: 40%;
    text-align: justify;
    order: 2;
  }
  @media (min-width: ${Theme.breakpoints.md}px) {
    width: 40%;
    order: 2;
  }
`

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  font-family: ${Theme.fonts.eliteSubTitle};
`

const Description = styled.p`
  /* text-align: justify; */
  font-size: 16px;
  font-family: ${Theme.fonts.eliteText};
  line-height: 1.6;
`

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
  )
}

export default ImageTextRow
