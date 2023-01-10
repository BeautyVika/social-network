import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    logout: () => void
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://st3.depositphotos.com/4164455/16696/v/600/depositphotos_166962762-stock-illustration-pink-flamingo-sketch.jpg'
                alt='logo'/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;