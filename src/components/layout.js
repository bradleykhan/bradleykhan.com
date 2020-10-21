import React, { useState } from "react";
import styled from "styled-components";
import { Intro } from "@components";
import { Nav } from "@styles";
import wave from "@images/wave.svg";

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2fr minmax(320px, 4fr) 2fr;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;

    @media (orientation: portrait) and (min-width: 768px) {
        grid-template-columns: 1fr minmax(320px, 4fr) 1fr;
        background-position: 0% 7%;
        background-size: auto auto;
    }
`;

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ?
            <Intro finishLoading={() => setIsLoading(false)} /> :
            <Grid>
                <Nav />
                {children}
            </Grid>
    )
}

export default Layout;