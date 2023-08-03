import styled from "styled-components"
import Theme from "../../../utils/globals/Theme"

export const Header1 = styled.h1`
  font-size: 55px;
  padding-top: 3em;
  color: ${Theme.colors.white};
  font-weight: 600;
  font-family: "dmsDisplay", Georgia, serif;
  span {
    color: ${Theme.colors.eliteGreen};
  }
`

export const Header2 = styled.h2`
  font-size: 46px;
  text-align: center;
  margin-bottom: 10px;
  font-family: "Oswald", monospace;
  color: ${Theme.colors.black};

  span {
    color: ${Theme.colors.elitePurple};
  }
`
