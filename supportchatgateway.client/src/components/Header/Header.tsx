import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="header">
            <span className="header__logo">Чат поддержки</span>
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className="header__nav-list">
                    <NavLink to="/chats" className="header__nav-item">Активные чаты</NavLink>
                    <NavLink to="/problems" className="header__nav-item">Проблемы</NavLink>
                    <NavLink to="/logs" className="header__nav-item">Отчеты</NavLink>
                    <NavLink to="/supports" className="header__nav-item">Специалисты</NavLink>
                </ul>
            </nav>
            <button className="header__menu-button" onClick={() => setOpen(!isOpen)}>
                =
            </button>
        </header>
    );
}