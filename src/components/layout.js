import React from "react";
import { Hello } from "@components";

const Layout = () => (
    <Hello finishLoading={() => console.log("hello")} />
)

export default Layout;