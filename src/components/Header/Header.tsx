import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import Navigation from "components/Header/Navigation/Navigation"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import IconButton from "@mui/material/IconButton"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

type HeaderPropsType ={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    logout: () => void
}
const Header = (props: HeaderPropsType) => {
    const logOutHandler = () => {
        props.logout()
    }
    return (
        <header className={s.headerContainer}>
                <div className={s.title}>
                    <Diversity3Icon sx={{color: 'ghostwhite', marginRight: '5px'}}/>
                    <span className={s.name}>SOCIAL NETWORK</span>
                </div>

                <Navigation/>

                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>
                            <span className={s.name}>{props.login}</span>
                            <IconButton onClick={logOutHandler}>
                                <ExitToAppIcon sx={{color: 'ghostwhite'}}/>
                            </IconButton>
                        </div>
                        : <NavLink className={(isActive) => isActive ? s.active : s.link} to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}
export default Header;