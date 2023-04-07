import React from 'react'
import {MessageType} from "redux/DialogsReducer"
import s from "./Message.module.css"

const Message =(props: MessageType) => {
    return <div className={s.messageContainer}>
        <div className={s.message}>
            {props.message}
        </div>
    </div>
}

export default Message