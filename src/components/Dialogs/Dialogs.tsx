import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPagePropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type NewMessageFormType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m => <Message key={m.id} message={m.message} id={m.id}/>))


    const addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       validate={[required, maxLength50]}
                       placeholder='Enter your message'/>
            </div>
            <div><button>Send Message</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<NewMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs