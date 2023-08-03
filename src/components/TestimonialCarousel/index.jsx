import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Theme from "../../utils/globals/Theme"

const testimonials = [
  {
    id: 1,
    quote:
      '"I go to dialysis two times a week, I cannot stress enough how important it is to have a facility like Elite that feels like a welcoming family."',
    author: "Sheldon",
  },
  {
    id: 2,
    quote:
      '"The staff at Elite went above and beyond to make my treatments as comfortable as possible. From warm blankets to the calming music, they created an atmosphere that made a world of difference for me."',
    author: "Keisha Campbell",
  },
  {
    id: 3,
    quote:
      '"I was nervous about starting treatment, but the technician put my mind at ease. She answered all of my questions and made sure I felt comfortable every step of the way."',
    author: "Tanya Davis",
  },
]

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let interval
    if (!isHovering) {
      interval = setInterval(() => {
        setActiveSlide(
          activeSlide === testimonials.length - 1 ? 0 : activeSlide + 1
        )
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [activeSlide, isHovering])

  const handleSlideClick = index => {
    setActiveSlide(index)
  }

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {testimonials.map((testimonial, index) => (
        <Slide key={testimonial.id} active={activeSlide === index}>
          <Quote>{testimonial.quote}</Quote>
          <Author>- {testimonial.author}</Author>
        </Slide>
      ))}
      <SlideButtons>
        {testimonials.map((testimonial, index) => (
          <SlideButton
            key={testimonial.id}
            active={activeSlide === index}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </SlideButtons>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  position: relative;
  height: 300px;
  margin-bottom: 5rem;
`

const Slide = styled.div`
  padding: 30px 20px;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  text-align: center;
`

const Quote = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
  margin: 0 auto;
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.eliteText};

  @media (min-width: ${Theme.breakpoints.xs}px) {
    font-size: 18px;
  }
  @media (min-width: ${Theme.breakpoints.sm}px) {
    font-size: 22px;
  }
  @media (min-width: ${Theme.breakpoints.md}px) {
    font-size: 24px;
  }
`

const Author = styled.p`
  font-size: 14px;
  font-style: italic;
  margin: 0 auto;
  margin-top: 10px;

  @media (min-width: ${Theme.breakpoints.xs}px) {
    font-size: 1em;
  }
`

const SlideButtons = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 40px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${Theme.breakpoints.xs}px) {
    bottom: -2.5rem;
  }
  @media (min-width: ${Theme.breakpoints.sm}px) {
    bottom: -2.5rem;
  }
`

const SlideButton = styled.button`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  background-color: ${props => (props.active ? "black" : "gray")};
  cursor: pointer;
`

export default TestimonialCarousel
