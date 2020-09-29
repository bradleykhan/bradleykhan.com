import styled from "styled-components";

const Nav = styled.nav`
    font-family: "Inter";
    color: var(--lightgrey);
    font-weight: 400;
    font-size: var(--medium);
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin-top: 50px;
`;

const Li = styled.li`
    margin-left: 10px;
    margin-right: 50px;
    display: inline-block;
`;

const ListItem = styled.li`
    margin-left: 50px;
    margin-right: auto;
    font-weight: 600;
    color: var(--white);
    font-size: var(--bigger);
`;

export { Ul, Li, ListItem };
export default Nav;