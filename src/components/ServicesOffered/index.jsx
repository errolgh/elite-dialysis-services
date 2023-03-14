import React from 'react';
import styled from 'styled-components';
import Theme from "../../utils/globals/Theme";


// Define the list of features as an array of objects
const features = [
  {
    icon: `✅`,
    title: 'Insurance Accepted',
    description: 'At our medical dialysis company, we accept a wide range of patient insurance plans to ensure that our high-quality treatments are accessible and affordable for everyone.',
  },
  {
    icon: '🩸',
    title: 'Hemodialysis',
    description: 'Our medical dialysis company specializes in providing effective hemodialysis treatment, using state-of-the-art equipment and a highly trained team of medical professionals to deliver the best possible care for our patients.',
  },
  {
    icon: '📚',
    title: 'Patient Resources',
    description: 'At our medical dialysis company, we believe in empowering our patients with the knowledge and resources they need to manage their kidney disease, which is why we offer a range of patient resources and educational materials on kidney health and dialysis treatment options.',
  },
];

// Define the styled components for the feature list
const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* max-width: 1200px; */
  padding: 80px;
  margin: 0 auto;
  background-color: ${({ background }) => 
  background ? background : Theme.colors.white};
  `;

const FeatureItem = styled.div`
  flex: 1 1 300px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-family: "Montserrat", monospace;
  }
  
  svg {
    font-size: 48px;
    /* margin-bottom: 20px; */
  }
  
  h3 {
    font-family: "Oswald", monospace;
    margin-bottom: 10px;
    font-size: 32px;
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
