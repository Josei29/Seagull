import React from "react";
import Header from "../hoc/header/Header";
import Content from "./Content/Content";

const Details = (props) => {
    let params = props.match.params.details;

    return(
        <React.Fragment>
            <Header {...props} />
            <Content content={params} />
        </React.Fragment>
    );
}; 

export default Details;