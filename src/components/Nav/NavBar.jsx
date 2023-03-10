import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Theme from "../../utils/globals/Theme";

const Nav = styled.nav`
  /* opacity: 30%; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  background: rgb(0, 0, 0, 0.5);
  z-index: 10000;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: ${Theme.colors.white};
  .logo {
    padding: 15px 0;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <div className="logo">
        Elite Dialysis Services
      </div>
      <Burger />
    </Nav>
  )
}

export default NavBar