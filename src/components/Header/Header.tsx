import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    userId: number
    email: string
    login: string
    isAuth: boolean
    setAuthUserDataAC: (userId: number, email: string, login: string) => void
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://st3.depositphotos.com/4164455/16696/v/600/depositphotos_166962762-stock-illustration-pink-flamingo-sketch.jpg'
                alt='logo'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;