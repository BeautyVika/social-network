import React, {FC} from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {CheckBox, Textarea} from "components/Common/FormsControls/FormsControls"
import {required} from "utils/validators/validators"
import s from "./LoginForm.module.css"

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormType = {
    captchaURL: null | string
}

export const LoginForm: FC<LoginFormType & InjectedFormProps<LoginFormDataType, LoginFormType>> = (props) => {

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
            </div>

            {props.error && <div className={s.formError}>{props.error}</div>}

            {props.captchaURL &&
                <>
                    <img src={props.captchaURL} alt='captcha'/>
                    <div>
                        <Field placeholder='Captcha'
                               type='text'
                               name='captcha'
                               component={Textarea}
                               validate={[required]}/>
                    </div>
                </>}

            <button>Send</button>
        </form>)
}

export const LoginReduxForm = reduxForm<LoginFormDataType, LoginFormType>({form: 'login'})(LoginForm)