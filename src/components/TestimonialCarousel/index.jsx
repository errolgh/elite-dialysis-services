import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Theme from '../../utils/globals/Theme';

const testimonials = [
  {
    id: 1,
    quote: '"I go to dialysis two times a week, I cannot stress enough how important it is to have a facility like Elite that feels like welcoming family."',
    author: 'Sheldon'
  },
  {
    id: 2,
    quote: '"The staff at Elite truly went above and beyond to make my treatments as comfortable as possible. Warm blankets to the calming music, they created an atmosphere that made a world of difference for me."',
    author: 'Keisha Campbell'
  },
  {
    id: 3,
    quote: '"I was nervous about starting dialysis, but the team at Elite quickly put my mind at ease. They took the time to answer all of my questions and made sure I felt comfortable every step of the way."',
    author: 'Tanya Davis'
  }
];

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === testimonials.length - 1 ? 0 : activeSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <SliderContainer>
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
  );
};

const SliderContainer = styled.div`
  position: relative;
  height: 300px;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  `;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  text-align: center;
  `;

const Quote = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin: 0 auto;
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.eliteText};
  `;

const Author = styled.p`
  font-size: 18px;
  font-style: italic;
  margin: 0 auto;
  margin-top: 10px;
  `;

const SlideButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 40px;
  `;

const SlideButton = styled.button`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? 'black' : 'gray')};
  cursor: pointer;
`;

export default TestimonialCarousel;
