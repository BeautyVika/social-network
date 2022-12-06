import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPagePropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props: DialogsPagePropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements  = props.dialogsPage.messages.map((m => <Message key={m.id} message={m.message} id={m.id}/>))
    let newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs