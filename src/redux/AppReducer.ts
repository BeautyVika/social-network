import {getAuthUserData} from "./AuthReducer"
import {AppThunkType} from "./reduxStore"

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let initialState= {
   initialized: false
}
const AppReducer = (state:AppType = initialState, action: AppActionsType): AppType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
//action
export const initializedSuccessAC = (): InitializedSuccessActionType => {
    return {type: INITIALIZED_SUCCESS}as const
}
//thunk
export const initializeApp = (): AppThunkType => (dispatch) => {
         dispatch(getAuthUserData())
             .then(() => {
            dispatch(initializedSuccessAC())
        })
}
//types
export type AppType ={
    initialized: boolean
}
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export type AppActionsType = InitializedSuccessActionType

export default AppReducer
