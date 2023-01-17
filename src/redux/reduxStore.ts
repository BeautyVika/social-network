import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./ProfileReducer";
import dialogsReducer, {DialogsActionType} from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer, {UsersActionsType} from "./UsersReducer";
import AuthReducer, {AuthActionsType} from "./AuthReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReduce} from 'redux-form'
import AppReducer, {AppActionsType} from "./AppReducer";


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPages: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        auth: AuthReducer,
        app: AppReducer,
        form: formReduce
    })

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch

export type AppRootActionsType = AppActionsType | AuthActionsType | DialogsActionType
                                 | ProfileActionsType | UsersActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppRootActionsType>

// @ts-ignore
window.store = store

export default store