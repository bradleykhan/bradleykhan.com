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
`;

const Li = styled.li`
    margin-left: 10px;
    margin-right: 50px;
    font-size: var(--smallest);
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

const Div = styled.div`
    grid-column: 1 / -1;
    grid-row: 1;
    height: 10vh;
`;

const Nav = () => (
    <Div>
        <NAV>
            <Ul>
                <ListItem>B K</ListItem>
            </Ul>
            <Ul2>
                <Li>HOME</Li>
                <Li>ABOUT</Li>
                <Li>WORK</Li>
            </Ul2>
        </NAV>
    </Div>
)


export { Ul, Li, ListItem };
export default Nav;