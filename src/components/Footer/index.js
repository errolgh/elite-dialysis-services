import React from "react";
import styled from "styled-components";

const GoogleMapWidget = styled.iframe`
    border: none;
    width: 600px;
    height: 300px;
`;

const zoomLevel = 14;
const mapSource = `https://maps.google.com/maps?q=55%20Manchester%20Avenue,%20May%20Pen,%20Jamaica&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`

export default function Footer(){
    return (
        <>
            <h2>is a footer</h2>
            <GoogleMapWidget src={mapSource} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
        </>
    )
}