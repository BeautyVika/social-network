import React from 'react';
import s from '../Dialogs.module.css'
import {MessageType} from "../../../redux/DialogsReducer";

const Message =(props: MessageType) => {
    return <div className={s.message} >{props.message}</div>
}

export default Message