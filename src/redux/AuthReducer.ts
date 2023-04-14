import {AppStateType, AppThunkType} from "./reduxStore"
import {authAPI, securityAPI} from "api/api"
import {stopSubmit} from "redux-form"
import {ThunkAction} from "redux-thunk"

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_IS_AUTH = "SET-IS-AUTH"
const GET_CAPTCHA_SUCCESS = "GET-CAPTCHA-SUCCESS"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}
const AuthReducer = (state: AuthType = initialState, action: AuthActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        case GET_CAPTCHA_SUCCESS:
            return  {...state, captchaURL: action.captchaUrl}
        default:
            return state
    }
}
//actions
export const setAuthUserDataAC = (userId: number | null, email: string | null,
                                  login: string | null, isAuth: boolean): SetUserDataACType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, email, login, isAuth
        }
    } as const
}
export const setIsAuth = (isAuth: boolean): SetIsAuthACType => {
    return {type: SET_IS_AUTH, isAuth} as const
}
export const getCaptcha = (captchaUrl: string | null): GetCaptchaACType => {
    return {type: GET_CAPTCHA_SUCCESS, captchaUrl} as const
}

//thunks
export const getAuthUserData = (): ThunkAction<Promise<any>, AppStateType, unknown, AuthActionsType> => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): AppThunkType => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) { //status ok
                    dispatch(getAuthUserData())
                } else if (response.data.resultCode === 10){ //captcha
                    dispatch(getCaptchaURL())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logout = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                    dispatch(setIsAuth(false))
                }
            })
    }
}
export const getCaptchaURL = (): AppThunkType => {
    return (dispatch) => {
        securityAPI.getCaptcha()
            .then(response => {
                dispatch(getCaptcha(response.data.url))
            })
    }
}
//types
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaURL: string | null
}
export type SetUserDataACType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}
export type SetIsAuthACType = {
    type: typeof SET_IS_AUTH
    isAuth: boolean
}
export type GetCaptchaACType = {
    type: typeof GET_CAPTCHA_SUCCESS
    captchaUrl: string | null
}
export type AuthActionsType = SetUserDataACType | SetIsAuthACType | GetCaptchaACType

export default AuthReducer
