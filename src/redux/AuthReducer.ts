import {DispatchType} from "./reduxStore";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"

export type AuthType ={
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}
export type DataType = {
    userId: number,
    email: string,
    login: string
}
export type SetUserDataACType = {
    type: typeof SET_USER_DATA
    data: DataType
}

let initialState= {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
export type AuthReducerType = typeof initialState

const AuthReducer = (state: AuthType = initialState, action: any): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (userId: number, email: string, login: string): SetUserDataACType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: DispatchType) => {
        authAPI.me().then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
    }
}
export default AuthReducer
