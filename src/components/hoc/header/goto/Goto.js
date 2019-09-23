import React from "react";
import { Link } from "react-router-dom";
import "./Goto.css";

const Goto = (props) => {
    let goto = "/services";
    if (props.location.pathname !== "/") goto = "/";

    return(
        <Link to={goto} exact="true" className="goto">{goto === "/" ? "HOME" : "SERVICES"}</Link>
    );
};

export default Goto;