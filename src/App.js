import React from 'react';
import './App.css';
import 'typeface-lato';
import 'typeface-fira-code';
import 'aos/dist/aos.css';
import AOS from 'aos';
import FrontPage from "./Pages/FrontPage";
import FeaturedProjects from "./Pages/FeaturedProjects";
import NavBar from "./Components/NavBar";
import {useTransition, animated} from 'react-spring';

class App extends React.Component {
    constructor(props){
        super(props);
        AOS.init({
            duration : 1500
        })
    }


    render () {
        return (
            <div>
                <NavBar/>
                <div data-aos={"fade-down"} >
                    <FrontPage/>
                </div>
            </div>
        )
    }
}

export default App;
