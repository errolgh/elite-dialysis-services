import React from "react";
import styled from "styled-components";
import Theme from "../../utils/globals/Theme";

const Container = styled.div`
    background-color: ${Theme.colors.lightGray};
    /* position: absolute; */
    padding-left: 10px;
    padding-bottom: 10px;
    text-align: center;
    a {
        font-size: 16px;
        color: ${Theme.colors.black};
        font-family: ${Theme.fonts.eliteSubTitle};
        text-decoration: none;

        &:hover {
            color: ${Theme.colors.eliteBlue};
            transition: color 0.3s ease;
        }
    }
`;

const Line = styled.div`
    border-bottom: 1px solid ${Theme.colors.lightGray};
    /* width: 100px; */
    margin: 0 auto;
    background-color: ${Theme.colors.lightGray};
`;

export default function Spectral(){
    return (
        <>
            <Line></Line>
            <Container><a href="https://spectralwebdesigns.netlify.app/" rel="noreferrer" target="_blank">&copy; Spectral Web Designs</a></Container>
        </>
    )
}