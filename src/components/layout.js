import React, { useState } from "react";
import { Intro } from "@components";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ? 
            <Intro finishLoading={() => setIsLoading(false)} /> :
            <div>{children}</div>
    )
}

export default Layout;