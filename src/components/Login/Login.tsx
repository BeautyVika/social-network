import React from "react"
import {connect} from "react-redux"
import {login} from "redux/AuthReducer"
import {Redirect} from "react-router-dom"
import {AppStateType} from "redux/reduxStore"
import {LoginFormDataType, LoginReduxForm} from "components/Login/LoginForm/LoginForm"
import FormLabel from "@mui/material/FormLabel"
import s from "./Login.module.css"

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    isAuth: boolean
    captchaURL: null | string
}

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginContainer}>
            <h1 className={s.title}>Login</h1>
            <FormLabel>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       style={{color: '#CA9CE1', textDecoration: 'underline'}}
                       target={'_blank'}> here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </FormLabel>

            <div className={s.loginForm}>
                <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
            </div>
        </div>
    )
}
type MapStateToPropsType = {
    isAuth: boolean
    captchaURL: null | string
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {login})(Login)
