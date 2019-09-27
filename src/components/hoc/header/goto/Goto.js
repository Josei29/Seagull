import React from "react";
import { Link } from "react-router-dom";
import "./Goto.css";

const Goto = (props) => {
    let goto = "/services";
    if (props.location.pathname !== "/") goto = "/";

    let contact = "/contact";
    if (props.location.pathname === "/contact") contact = "/services";

    return(
        <div className="goto--container">
        <Link to={goto} exact="true" className="goto">{goto === "/" ? "HOME" : "SERVICES"}</Link>
        <Link to={contact} exact="true" className="goto">{contact === "/contact" ? "CONTACT US" : "SERVICES"}</Link>
        </div>
    );
};

export default Goto;