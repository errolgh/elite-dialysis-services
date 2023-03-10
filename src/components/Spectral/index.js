import React from "react";
import styled from "styled-components";
import Theme from "../../utils/globals/Theme";

const Container = styled.div`
    background-color: ${Theme.colors.lightGray};
    /* position: absolute; */
    padding-left: 10px;
    padding-bottom: 10px;
    text-align: center;
    p {
        font-size: 16px;
        color: #fff;
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
            <Container><a href="https://spectralwebdesigns.netlify.app/" noreferrer target="_blank">&copy; Spectral Web Designs</a></Container>
        </>
    )
}