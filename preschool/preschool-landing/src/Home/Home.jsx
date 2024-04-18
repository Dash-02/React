import React from "react";
import './Home.css';
import Header from '../Header/Header.jsx';
import imgArrow from '../assets/img/Arrow.png';
import imgBooks from '../assets/img/vecteezy_book.png';
import tg from '../assets/icons/telegramm.svg';
import whatsapp from '../assets/icons/watsapp.svg';

function Home() {
    return (
        <section className="home">
            <Header />
            {/* <div className="line"></div> */}
            <div className="container">
                <div className="content">
                    <h1>Онлайн-платформа для <span className="yellow-text">дошкольного</span> образования</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <img src={imgArrow} alt="arrow" />
            
                    <button>Записаться на обучение</button>
                
                    <div className="social_media">
                        <p>или написать:</p>
                        <img src={tg} alt="telegram" />
                        <img src={whatsapp} alt="whatsApp" />
                    </div>
                </div>
                <img className="img-books" src={imgBooks} alt="books" />
            </div>
        </section>
    )
}

export default Home;