import styled from "styled-components";
import { Colours, FontSizes } from "@styles";

const Nav = styled.nav`
    font-family: "Inter";
    color: ${Colours.lightgrey};
    font-weight: 400;
    font-size: ${FontSizes.medium};
    display: flex;
    justify-content: space-between;
    margin-right: 200px;
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
    margin-left: 200px;
    margin-right: auto;
    font-weight: 600;
    color: ${Colours.white};
    font-size: ${FontSizes.bigger};
`;

export { Ul, Li, ListItem };
export default Nav;