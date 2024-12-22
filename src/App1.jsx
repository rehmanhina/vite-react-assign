import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import phones from "./phones";
import Footer from "./Footer";


const App =()=> {
    return(
        <div>
            <Header/>
            <Hero/>
            <Features/>
            <Phones/>
            <Footer/>
        </div>
    );
};

export default App;