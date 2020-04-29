import React, { useState, useEffect } from 'react';
import { fadein } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Route, useHistory } from 'react-router-dom';
import './FrontPage.css';
import 'typeface-lato';
import 'typeface-fira-code';
import 'aos/dist/aos.css';
import { CSSTransition } from 'react-transition-group';
import AOS from 'aos';

const Fadein = styled.div`animation: 2s ${keyframes`${fadein}`} infinite`;

const FrontPage = () => {
    const myStyle = {}
    AOS.init({
        duration : 1500
    })
    let history = useHistory();
    function handleLinkClick(link){
        history.push(link)
    }
    let d = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    const [fullTime, setTime] = useState(d.toLocaleTimeString());
    const [fullDate, setDate] = useState(months[d.getMonth()] + " " + d.getDate() + " - " + d.getFullYear());
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        setInterval(() => {
            let d = new Date();
            setTime(d.toLocaleTimeString());
            setDate(months[d.getMonth()] + " " + d.getDate() + " - " + d.getFullYear());
        }, 1000);
    });
    function handleClick() {
        alert("Button Clicked!")
    }

    function plusClick() {
        setMenu(!menu);
    }

    return (
        <div className={"frontpage"} data-aos={"fade-down"} >
            <svg className={"logo"} >
                <circle className={"logo-ellipse3"}/>
                <circle className={"logo-ellipse2"}/>
            </svg>
            <a className={"intro-text"} >hi, i'm aly!</a>
            <a className={"main-text"} >DESIGNING WITHOUT THE BULLSH*T.</a>
            <a className={"main-text currently"} >CURRENTLY: </a> <a className={"main-text currently currentproj"} >FINISHING THIS WEBSITE.</a>
            <a className={"main-text basedin"} >BASED IN NYC.</a>
            <a className={"text-scrolldown"} >SCROLL DOWN >></a>
            <div className={'vector-1'} >
                <hr className={'vector-1-line'}/>
            </div>
            <span className={"circle"}/>
            {menu ? (
                <a className={'plus'} onClick={plusClick}>-</a>
            ) : (
                <a className={'plus'} onClick={plusClick}>+</a>
            )}
            <a className={'date'}>{fullDate}</a>
            <div className={'vector-2'} >
                <hr className={'vector-2-line'}/>
            </div>
            <a className={'time'}>IT IS CURRENTLY:</a>
            <a className={'time actual'}>{fullTime}</a>
            <CSSTransition in={menu} classNames="example" timeout={350} unmountOnExit >
                <a className={'popout'} >
                    <a className={'about'} onClick={handleClick}>ABOUT</a>
                    <a className={'work'} onClick={handleClick}>WORK</a>
                    <a className={'contact'} onClick={handleClick}>CONTACT</a>
                </a>
            </CSSTransition>
        </div>

    )
}

export default FrontPage;
