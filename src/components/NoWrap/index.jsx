import React from "react"
import styled from "styled-components"

const NoWrapContainer = styled.span`
  white-space: nowrap;
`

const NoWrap = ({ children }) => {
  return <NoWrapContainer>{children}</NoWrapContainer>
}

export default NoWrap
