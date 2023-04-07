import React from 'react'
import {connect} from "react-redux"
import {login} from "redux/AuthReducer"
import {Redirect} from "react-router-dom"
import {AppStateType} from "redux/reduxStore"
import {FormDataType, LoginReduxForm} from "components/Login/LoginForm/LoginForm"
import s from "./Login.module.css"

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginContainer}>
            <h1 className={s.title}>Login</h1>
            <div className={s.loginForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): {isAuth: boolean} => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)
