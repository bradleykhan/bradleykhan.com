import React, { useState } from "react";
import { Intro } from "@components";
import { Nav, Ul, Li, ListItem } from "@styles";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ?
            <Intro finishLoading={() => setIsLoading(false)} /> :
            (<>
                <Nav>
                    <Ul>
                        <ListItem>Bradley Khan</ListItem>
                    </Ul>
                    <Ul>
                        <Li>Home</Li>
                        <Li>About</Li>
                        <Li>Work</Li>
                    </Ul>
                </Nav>
                <div>{children}</div>
            </>)
    )
}

export default Layout;