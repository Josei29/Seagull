import React from "react";
import Header from "../hoc/header/Header";
import Hero from "./hero/Hero";
import Items from "./items/Items";
import Footer from "../hoc/footer/Footer";

const Services = (props) => {
    return(
        <React.Fragment>
            <Header {...props} />
            <Hero />
            <Items />
            <Footer />
        </React.Fragment>
    );
};

export default Services;