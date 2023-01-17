import {getAuthUserData} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type AppType ={
    initialized: boolean
}
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type ActionType = InitializedSuccessActionType

let initialState= {
   initialized: false
}
const AppReducer = (state:AppType = initialState, action: ActionType): AppType => {
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
export const initializedSuccessAC = (): InitializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS
    }as const
}
export const initializeApp = () => (dispatch: any) => {
         dispatch(getAuthUserData())
             .then(() => {
            dispatch(initializedSuccessAC())
        })
}

export default AppReducer
