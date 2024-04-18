import React from "react";
import './Header.css';
import logo from '../assets/icons/logo.svg';

function Header() {
    return (
        <div className="container">
        <section className="header">
            <div className="logo">
            <img src={logo} alt="logo" />
            <button className="btn-logo">
                Дай пять!
            </button>
        </div>
        <nav>
            <a href="Main">Главная</a>
            <a href="parents">Родителям</a>
            <a href="preschooler">Детям</a>
            <a href="teacher">Преподавателям</a>
        </nav>
        <div className="btn-login">
            <button>Войти в личный кабинет</button>
            <button>Зарегистрироваться</button>
        </div>
        </section>
        </div>
    )
}

export default Header;