import React from "react";
import Logo from "./logo";
import Text from "./Text";
import "../../style/Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <Logo />
            <Text />
        </div>
    );
};

export default Navbar;