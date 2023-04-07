import React from 'react'
import {NavLink} from "react-router-dom"
import {DialogType} from "redux/DialogsReducer"
import user from "../../../assets/img/user.webp"
import s from './DialogItem.module.css'

const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialogItem} >
            <NavLink to={path} >
                <img src={user} alt='user' className={s.userPhoto}/>
                <span className={s.name}>{props.name}</span>
            </NavLink>
        </div>
    )
}
export default DialogItem