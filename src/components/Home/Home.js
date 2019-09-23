import React from "react";
import Header from "../hoc/header/Header";
import Hero from "./hero/Hero";
import Description from "./description/Description";
import Bio from "./bio/Bio";
import Footer from "../hoc/footer/Footer";

const Home = (props) => {
    return(
        <React.Fragment>
            <Header {...props} />
            <Hero />
            <Description />
            <Bio />
            <Footer />
        </React.Fragment>
    );
};

export default Home;