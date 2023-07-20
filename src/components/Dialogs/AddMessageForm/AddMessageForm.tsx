import React from "react"
import style from "./AddMessageForm.module.css"
import {maxLengthCreator, required} from "utils/validators/validators"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea} from "components/Common/FormsControls/FormsControls"
import {NewMessageFormType} from "components/Dialogs/Dialogs"

const maxLength250 = maxLengthCreator(250)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       validate={[required, maxLength250]}
                       placeholder='Enter your message'/>
            </div>
            <button className={style.btn}>Send Message</button>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<NewMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)