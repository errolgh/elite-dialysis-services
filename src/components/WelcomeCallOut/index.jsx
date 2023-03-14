import React from "react";
import styled from "styled-components";
import Theme from "../../utils/globals/Theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
  padding-top: 40px;
  background-color: ${({ background }) => 
  background ? Theme.colors.white : background};
`;

const StyledIcon = styled.i`
  font-size: 2em;
  padding-bottom: 10px;
`;

const StyledHeader = styled.h2`
  font-size: 46px;
  text-align: center;
  margin-bottom: 24px;
  font-family: "Oswald", monospace;
  color: ${ Theme.colors.black };
`;

const StyledText = styled.p`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Montserrat", monospace;
  color: ${ Theme.colors.black };
`;

const WelcomeCallOut = ({ icon, headerText, bodyText, background }) => {
  return (
    <Container style={{backgroundColor: background}}>
      <StyledIcon className={icon} />
      <StyledHeader>{headerText}</StyledHeader>
      <StyledText>{bodyText}</StyledText>
    </Container>
  );
};

export default WelcomeCallOut;
