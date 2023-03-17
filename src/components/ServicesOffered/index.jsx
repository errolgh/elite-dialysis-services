import React from 'react';
import styled from 'styled-components';
import Theme from "../../utils/globals/Theme";
import { FaBook } from "react-icons/fa";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDroplet } from "react-icons/bi";

const checkIcon = <BsFillBookmarkCheckFill color={ Theme.colors.eliteGreen } size="1.5em" title="checkmark and ribbon" />

const bloodIcon = <BiDroplet color={ Theme.colors.elitePurple } size="1.6em" title="drop of blood" />

const bookIcon = <FaBook color={ Theme.colors.eliteBlue } size="1.6em" title="book" />

// Define the list of features as an array of objects
const features = [
  {
    icon: checkIcon,
    title: 'Insurance Accepted',
    description: 'We accept a wide range of insurance plans to ensure treatments are accessible and affordable for everyone.',
  },
  {
    icon: bloodIcon,
    title: 'Hemodialysis',
    description: 'Hemodialysis is provided by our team of medical professionals using state-of-the-art equipment to deliver the best possible care for our patients.',
  },
  {
    icon: bookIcon,
    title: 'Patient Resources',
    description: 'We believe in empowering our patients-- we offer a range of patient resources and educational materials on kidney health and treatment options.',
  },
];

// Define the styled components for the feature list
const FeatureList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ background }) => background ? background : Theme.colors.white};

  /* max-width: 1200px; */
  padding: 3em 30px;

  @media (min-width: ${Theme.breakpoints.md}px) {
      padding: 6rem 60px;
  }

  @media (min-width: ${Theme.breakpoints.lg}px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  max-width: 340px;
  height: 400px;
  margin: 30px 0;
  padding: 15px 8px;
  
  @media (min-width: ${Theme.breakpoints.xs}px) {
    margin: 20px;
    padding: 20px 16px;
  }

  @media (min-width: ${Theme.breakpoints.lg}px) {
    margin: 20px;
    padding: 40px 20px;
  }


  background-color: ${Theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${Theme.colors.white};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

  p {
    font-family: "Montserrat", monospace;
    line-height: 1.6;
  }
  
  svg {
    font-size: 28px;
    margin-bottom: 8px;

  @media (min-width: ${Theme.breakpoints.xs}px) {
     font-size: 36px;
    }
    
    @media (min-width: ${Theme.breakpoints.sm}px) {
      font-size: 46px;
   }
  }
  
  h3 {
    font-family: "Oswald", monospace;
    margin-bottom: 10px;
    font-size: 22px;
    
    @media (min-width: ${Theme.breakpoints.sm}px) {
      font-size: 28px;
   }
  }
  &:first-child>h3 {
    margin-top: 15px;
  }

  &:nth-child(3)>svg {
    margin-top:10px;

  }
`;

// Define the component that uses the feature list and styled components
const ServicesOffered = ({ background }) => {
  return (
    <FeatureList style={{ backgroundColor: background }}>
      {features.map((feature) => (
        <FeatureItem key={feature.title}>
          <span role="img" aria-label={feature.title}>
            {feature.icon}
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </FeatureItem>
      ))}
    </FeatureList>
  );
};

export default ServicesOffered;
