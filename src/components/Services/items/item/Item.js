import React from "react";
import "./Item.css";
import ItemLogo from "./logo/Logo";
import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="item" >
            <ItemLogo />
            <Link to={`/services/${props.title.toLowerCase()}`} 
                className="itemLink" 
            >{props.title}
            </Link>
        </div>
    );
};

export default Item;