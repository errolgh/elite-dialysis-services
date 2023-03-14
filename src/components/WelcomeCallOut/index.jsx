import React from "react";
import styled from "styled-components";
import Theme from "../../utils/globals/Theme";
import Logo from "../../images/hands-and-box.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
  padding: 60px 0;
  background-color: ${({ background }) => 
  background ? Theme.colors.white : background};
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 75px;
  margin-bottom: 20px;
  border-radius: 25px;
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
  line-height: 1.6;
`;

const WelcomeCallOut = ({ headerText, bodyText, background }) => {
  return (
    <Container style={{backgroundColor: background}}>
      <StyledImage src={Logo} />
      <StyledHeader>{headerText}</StyledHeader>
      <StyledText>{bodyText}</StyledText>
    </Container>
  );
};

export default WelcomeCallOut;
