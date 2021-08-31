import React from 'react';
import './menu.scss'
const Menu = (props) => {
    return (
        <div className={`menu ${props.menuOpen ? 'active' : ''}`}>
            <ul>
                <li><a href="#intro" onClick={() => props.setMenuOpen(!props.menuOpen)}>Home</a></li>
                <li><a href="#portfolio" onClick={() => props.setMenuOpen(!props.menuOpen)}>Portfolio</a></li>
                <li><a href="#works" onClick={() => props.setMenuOpen(!props.menuOpen)}>Works</a></li>
                <li><a href="#testimonias" onClick={() => props.setMenuOpen(!props.menuOpen)}>Testimonias</a></li>
                <li><a href="#contact" onClick={() => props.setMenuOpen(!props.menuOpen)}>Contact</a></li>
            </ul>
        </div>
    );
};

export default Menu;
