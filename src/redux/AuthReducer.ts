import {AppStateType, AppThunkType} from "./reduxStore";
import {authAPI} from "api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_IS_AUTH = "SET-IS-AUTH"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const AuthReducer = (state: AuthType = initialState, action: AuthActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_IS_AUTH:
            return {...state, isAuth: action.isAuth}
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
export const setIsAuth = (isAuth: boolean) => {
    return {type: SET_IS_AUTH, isAuth} as const
}

export const getAuthUserData = (): ThunkAction<Promise<any>, AppStateType, unknown, AuthActionsType> => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}
//thunks
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
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
//types
export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
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
export type AuthActionsType = SetUserDataACType | SetIsAuthACType

export default AuthReducer
