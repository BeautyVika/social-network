import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {DialogsPagePropsType} from "./DialogsContainer"
import Paper from '@mui/material/Paper'
import {AddMessageFormRedux} from "components/Dialogs/AddMessageForm/AddMessageForm"

export type NewMessageFormType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map((m => <Message key={m.id} message={m.message} id={m.id}/>))


    const addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogsContainer}>

            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>

            <div className={s.formMessage}>
                <Paper elevation={3} sx={{padding: '10px'}}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </Paper>
            </div>
        </div>
    )
}

export default Dialogs