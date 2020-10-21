import React from "react";
import styled from "styled-components";

const NAV = styled.nav`
    font-family: "Inter";
    color: var(--lightgrey);
    font-weight: 400;
    font-size: var(--medium);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin-top: 30px;
`;

const Ul2 = styled.ul`
    list-style-type: none;
    margin-top: 30px;
    margin-left: 50px;
    @media (orientation: portrait) and (max-width: 500px) {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-left: 0;
    }
`;

const Li = styled.li`
    margin-left: 10px;
    margin-right: 50px;
    font-size: var(--smol);
    font-weight: 600;
    color: var(--orange);
    letter-spacing: 4px;
    display: inline-block;
`;

const ListItem = styled.li`
    font-weight: 600;
    color: var(--white);
    font-size: var(--bigger);
`;

const GridItem = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    height: 10vh;

    @media (orientation: portrait) and (max-width: 500px) {
        height: 20vh;
    }
`;

const Anchor = styled.a`
    text-decoration: inherit;
    color: inherit;
`;

const Nav = () => (
    <GridItem>
        <NAV>
            <Ul>
                <ListItem>B K</ListItem>
            </Ul>
            <Ul2>
                <Li><Anchor href="#role">ROLE</Anchor></Li>
                <Li><Anchor href="#about">ABOUT</Anchor></Li>
                <Li><Anchor href="#skills">SKILLS</Anchor></Li>
            </Ul2>
        </NAV>
    </GridItem>
)


export { Ul, Li, ListItem };
export default Nav;