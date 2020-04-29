import {CSSTransition} from "react-transition-group";
import React, {useEffect, useState} from "react";
import './NavBar.css';
const NavBar = () => {
    let d = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    const [fullTime, setTime] = useState(d.toLocaleTimeString());
    const [fullDate, setDate] = useState(months[d.getMonth()] + " " + d.getDate() + " - " + d.getFullYear());
    useEffect(() => {
        setInterval(() => {
            let d = new Date();
            setTime(d.toLocaleTimeString());
            setDate(months[d.getMonth()] + " " + d.getDate() + " - " + d.getFullYear());
        }, 1000);
    });
    const [menu, setMenu] = useState(false);
    function plusClick() {
        setMenu(!menu);
    }
    function handleClick() {
        alert("Button Clicked!")
    }
    return (
        <div className={'navbar'}>
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

export default NavBar;
