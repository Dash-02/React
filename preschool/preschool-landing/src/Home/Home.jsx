import React from "react";
import './Home.css';
import Header from '../Header/Header.jsx';
import imgArrow from '../assets/img/Arrow.png';

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="line"></div>
            <h1>Онлайн-платформа для дошкольного образования</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src={} alt="arrow" />
        </div>
    )
}

export default Home;