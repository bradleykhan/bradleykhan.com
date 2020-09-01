import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import sr from "@utils/scrollreveal";

const DIV = styled.div``;

const Goodbye = () => {
    const scrollReveal = useRef(null);

    useEffect(() => sr.reveal(scrollReveal.current), []);

    return (
        <DIV ref={scrollReveal}>
            <h1>Goodbye</h1>
        </DIV>
    )
}

export default Goodbye;