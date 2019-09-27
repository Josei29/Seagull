import React from "react";
import Header from "../hoc/header/Header";
import Form from "./Form/Form";

const Contact = (props) => {
    return(
        <React.Fragment>
            <Header {...props} />
            <Form {...props} />
        </React.Fragment>
    );
};

export default Contact;