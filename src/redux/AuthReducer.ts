import {DispatchType} from "./reduxStore";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"

export type AuthType ={
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

let initialState= {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
const AuthReducer = (state:AuthType = initialState, action: any): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (userId: number | null, email: string | null,
                                  login: string | null, isAuth: boolean): SetUserDataACType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, email, login, isAuth
        }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: DispatchType) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: DispatchType) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch: DispatchType) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
    }
}
export default AuthReducer
