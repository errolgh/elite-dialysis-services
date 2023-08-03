import React from "react"
import styled from "styled-components"
import Burger from "./Burger"
import Theme from "../../utils/globals/Theme"
import Logo from "../../images/justhands.png"
import { Link } from "gatsby"

const Nav = styled.nav`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  z-index: 10000;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: ${Theme.colors.white};
  font-family: ${Theme.fonts.eliteSubTitle};
  font-size: 18px;
  background-color: ${Theme.colors.darkBlue};
`

const LogoContainer = styled.div`
  padding-top: 7px;
  align-items: center;
  display: flex;
  padding-bottom: 16px;
  /* margin-left: 50px; */

  span {
    padding-left: 13px;
    font-size: 20px;
    padding-bottom: 17px;
  }

  img {
    padding-top: 3px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const NavBar = () => {
  return (
    <Nav>
      <div className="align-baseline">
        <StyledLink to="/">
          <LogoContainer>
            <img src={Logo} width={36} alt="Elite Dialysis Logo" />
            <span>Elite Dialysis</span>
          </LogoContainer>
        </StyledLink>
      </div>
      <Burger />
    </Nav>
  )
}

export default NavBar
