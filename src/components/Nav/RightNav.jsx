import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 50px;
  li {
    padding: 18px 18px 10px 18px;
    :hover {
      cursor: pointer;
      background-color: #153b5a;
      /* background: rgb(21,59,90); */
      background: linear-gradient(
        270deg,
        rgba(21, 59, 90, 0.5648460067620799) 0%,
        rgba(21, 59, 90, 1) 32%
      );
    }
  }
  @media (max-width: 768px) {
    z-index: 1;
    flex-flow: column nowrap;
    background-color: #0d2538;
    opacity: 0.98;
    padding-right: 0;
    position: fixed;
    top: 0;
    right: 0;

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    height: 100vh;
    width: 300px;
    width: 70vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 20px 0 20px 20px;
      margin: 0;
      :hover {
        cursor: pointer;
        background-color: #153b5a;
      }
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <StyledLink to="/" activeClassName="active">
        <li>Home</li>
      </StyledLink>
      <StyledLink to="/services/" activeClassName="active">
        <li>Services</li>
      </StyledLink>
      <StyledLink to="/about/" activeClassName="active">
        <li>About Us</li>
      </StyledLink>
      <StyledLink to="/contact/" activeClassName="active">
        <li>Contact Us</li>
      </StyledLink>
    </Ul>
  )
}

export default RightNav
