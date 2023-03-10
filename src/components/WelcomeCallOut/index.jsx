import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

const StyledIcon = styled.i`
  font-size: 2em;
  margin-bottom: 10px;
`;

const StyledHeader = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  font-size: 1em;
  text-align: center;
  margin-bottom: 10px;
`;

const WelcomeCallOut = ({ icon, headerText, bodyText }) => {
  return (
    <Container>
      <StyledIcon className={icon} />
      <StyledHeader>{headerText}</StyledHeader>
      <StyledText>{bodyText}</StyledText>
    </Container>
  );
};

export default WelcomeCallOut;
