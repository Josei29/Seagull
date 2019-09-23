import React from "react";
import Logo from "./logo/Logo";
import Goto from "./goto/Goto";
import "./Header.css";

const Header = (props) => {
    return(
        <div className="header">
            <Logo />
            <Goto {...props} />
        </div>
    ); 
};

export default Header;