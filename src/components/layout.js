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
    background-size: auto auto;
    background-position: 0% 8%;
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