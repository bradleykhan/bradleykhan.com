import React, { useState, useEffect } from "react";
import styled from "styled-components"
import anime from "animejs";
import { centerFlex, Colours, FontSizes } from "@styles";

const Center = styled.div`
    ${centerFlex};
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${Colours.darkgrey};
`

const Title = styled.h1`
    font-family: Roboto Condensed, sans-serif;
    font-size: ${FontSizes.title};
    color: ${Colours.orange};
    text-align: center;
    font-weight: normal;
    width: 100%;
    opacity: 0;
`

const SVG = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 42%;
    left: 65%;
    opacity: 0;
`

const Intro = ({ finishLoading }) => {
    const animate = () => {
        const loader = anime.timeline({
            complete: () => setTimeout(finishLoading, 1000)
        });

        loader.add({
            targets: "#part1",
            opacity: 1,
            easing: "easeInOutQuart",
            duration: 500
        }, "+=1000")
            .add({
                targets: ".part2",
                opacity: 1,
                easing: "easeInOutQuart",
                duration: 500
            }, "+=2000")
            .add({
                targets: "#part3",
                translateY: -37,
                translateX: -69,
                easing: "easeInOutElastic",
                duration: () => anime.random(1200, 1800)
            }, "+=2000")
            .add({
                targets: "#part3",
                scale: 60,
                duration: 500,
                easing: "easeInOutCirc"
            }, "+=200")
            .add({
                targets: "#part4",
                duration: 500,
                easing: "easeInOutCirc",
                scale: 0
            });
    }

    useEffect(() => {
        animate();
    }, []);

    return (
        <Center>
            <div id="part4" style={{ position: "relative" }}>
                <Title id="part1">Hello</Title>
                <Title className="part2">I&apos;m Bradley</Title>
                <SVG className="part2">
                    <svg viewBox="0 0 100 100" id="part3">
                        <circle cx="50" cy="50" r="1.8" fill={Colours.orange} />
                    </svg>
                </SVG>
            </div>
        </Center>
    )
}

export default Intro;

// 50px font, 3px r, translateY = -55px, translateX = -105px
// 54.5, 77 top left
// <div style={{position: "absolute", border: "1px solid white", top: "50%", left: "50%", height: "1px", width: "1px"}} />