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
const AuthReducer = (state = initialState, action: any): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
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

export default AuthReducer
