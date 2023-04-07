import React from 'react'
import {NavLink} from "react-router-dom"
import s from "components/Header/Navigation/Navigation.module.css"
import PersonIcon from '@mui/icons-material/Person'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GroupIcon from '@mui/icons-material/Group'

const Navigation = () => {
    return (
        <nav className={s.navContainer}>
            <div className={s.item}>
                <NavLink className={(isActive) => isActive ? s.active : s.link} to='/profile'>
                    <PersonIcon/> Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(isActive) => isActive ? s.active : s.link} to='/dialogs'>
                    <MailOutlineIcon/> Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(isActive) => isActive ? s.active : s.link} to='/users'>
                    <GroupIcon/> Users
                </NavLink>
            </div>
        </nav>
    )
}
export default Navigation;