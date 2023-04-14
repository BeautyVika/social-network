import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CheckBox, Textarea} from "components/Common/FormsControls/FormsControls";
import {required} from "utils/validators/validators";
import s from './LoginForm.module.css'

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.field}>
                <Field placeholder={'Email'} name={'email'} component={Textarea} validate={[required]}/>
            </div>

            <div className={s.field}>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Textarea} validate={[required]}/>
            </div>

            <div className={s.remember}>
                <Field type='checkbox' name={'rememberMe'} component={CheckBox}/>
                <span>remember me</span>

                {props.error && <div className={s.formError}>{props.error}</div>}
            </div>

            <button>Send</button>
        </form>)
}

export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)