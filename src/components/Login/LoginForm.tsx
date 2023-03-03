import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "../Common/FormsControls/FormsControls.module.css";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={Input}/> remember me

                {props.error && <div className={s.formSummaryError}>{props.error}</div>}

                <button>Login</button>
            </div>
        </form>)
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)