import * as React from "react"
import Theme from "../../utils/globals/Theme"
import PropTypes from "prop-types"
import styled from "styled-components"

const DefaultButton = styled.button`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  font-family: "Montserrat";
  font-size: 1.2em;
  padding: 18px 36px;
  font-weight: 600;
  background-color: ${Theme.colors.eliteBlue};
  color: ${Theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${Theme.colors.darkBlue};
  }

  /* Apply size-specific styles based on the size prop */
  ${({ size }) =>
    size === "small" &&
    `
    padding: 4px 8px;
    font-size: 14px;
  `}

  ${({ size }) =>
    size === "medium" &&
    `
    padding: 8px 16px;
    font-size: 1.2rem;
  `}

  ${({ size }) =>
    size === "large" &&
    `
    padding: 15px 30px;
    font-size: 24px;
  `}

  /* Apply color-specific styles based on the color prop */
  ${({ color }) =>
    color === "primary" &&
    `
    background-color: ${Theme.colors.eliteBlue};
    color: white;
  `}

  ${({ color }) =>
    color === "secondary" &&
    `
    background-color: ${Theme.colors.eliteGreen};
    color: white;
  `}

  ${({ color }) =>
    color === "tertiary" &&
    `
    background-color: ${Theme.colors.elitePurple};
    color: white;
  `} /* Add more color options as needed */
`

export default function Button({ size, color, children, onClick, type }) {
  return (
    <DefaultButton type={type} size={size} color={color} onClick={onClick}>
      {children}
    </DefaultButton>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "otherColor"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  size: "medium",
  color: "primary",
  onClick: () => {},
}
