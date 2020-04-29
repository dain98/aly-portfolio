import {CSSTransition} from "react-transition-group";
import React, {useEffect, useState} from "react";
import './FrontPage.css';
import NavBar from "../Components/NavBar";
import FeaturedProjects from "./FeaturedProjects";

const FrontPage = () => {

    return (
        <div className={"frontpage"} >
            <svg className={"logo"} >
                <circle className={"logo-ellipse3"}/>
                <circle className={"logo-ellipse2"}/>
            </svg>
            <a className={"intro-text"} >hi, i'm aly!</a>
            <a className={"main-text"} >DESIGNING WITHOUT THE BULLSH*T.</a>
            <a className={"main-text currently"} >CURRENTLY: </a> <a className={"main-text currently currentproj"} >FINISHING THIS WEBSITE.</a>
            <a className={"main-text basedin"} >BASED IN NYC.</a>
            <a className={"text-scrolldown"} >SCROLL DOWN >></a>
            <div className={'vector-1'}></div>


            <span className={"circle"}/>
            <FeaturedProjects />
        </div>
    )
}

export default FrontPage;
