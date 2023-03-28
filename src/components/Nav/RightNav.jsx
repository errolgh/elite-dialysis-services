import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 50px;
  li {
    padding: 18px 0px 18px 12px;
    :hover {
        cursor: pointer;
        background-color: #153b5a;
        /* background: rgb(21,59,90); */
        background: linear-gradient(270deg, rgba(21,59,90,0.5648460067620799) 0%, rgba(21,59,90,1) 32%);
    }
  }
  @media (max-width: 768px) {
    z-index: 2;
    flex-flow: column nowrap;
    background-color: #0D2538;
    opacity: 0.98;

    position: fixed;
    top: 0;
    right: 0;
    
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    width: 300px;
    width: 70vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      :hover {
        cursor: pointer;
        background-color: #153b5a;
    }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Services</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </Ul>
  )
}

export default RightNav