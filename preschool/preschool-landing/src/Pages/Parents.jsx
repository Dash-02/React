import React from "react";
import './Parents.css';
import imgBag from '../assets/img/bag.png';
import imgBooks from '../assets/img/books.png';
import imgAcadem from '../assets/img/academic.png';

function Parents() {
    return (
        <div className="parents">
            <div className="container">
                <div className="content">
                    <h1>Что предлагает наша <span className="yellow-text">онлайн-платформа</span>?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="cards">
                        <div className="card">
                            <img src={imgBag} alt="card" />
                            <div className="card-line"></div>
                            <p>Вы сможете легко и эффективно подготовить Вашего ребенка к школе.</p>
                        </div>
                    </div>
                    <div className="banner">
                        <p>
                        Пройдите простую регистрацию на сайте и получите доступ к образовательным материалам!
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Parents;