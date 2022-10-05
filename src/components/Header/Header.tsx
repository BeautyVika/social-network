import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://st3.depositphotos.com/4164455/16696/v/600/depositphotos_166962762-stock-illustration-pink-flamingo-sketch.jpg'
                alt='logo'/>
        </header>
    )
}
export default Header;