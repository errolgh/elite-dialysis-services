import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Theme from "../../utils/globals/Theme";
import Logo from "../../images/justhands.png";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: ${Theme.colors.white};
  font-family: ${Theme.fonts.eliteSubTitle};
  font-size: 18px;
  background-color: rgb(13, 37, 56, 0.8);
  
  :hover {
    background-color: rgb(13, 37, 56, 1.0);
    transition: background 0.3s ease;
  }
`;


const LogoContainer = styled.div`
  padding-top: 7px;
  align-items: center;
  display: flex;
  padding-bottom: 16px;

  span {
    padding-left: 13px;
    font-size: 20px;
    padding-bottom: 17px;
  }

  img {
    padding-top: 3px;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div>
        <LogoContainer>
          <img src={Logo} width={36}/>
          <span>
            Elite Dialysis Service Ltd
          </span>
        </LogoContainer>
      </div>
      <Burger />
    </Nav>
  )
}

export default NavBar