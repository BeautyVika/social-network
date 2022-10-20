import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {
    ActionsTypes,
    DialogType,
    MessageType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements  = props.messages.map((m => <Message message={m.message} id={m.id}/>))
    let newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }
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