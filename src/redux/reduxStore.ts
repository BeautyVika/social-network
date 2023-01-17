import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduce} from 'redux-form'
import AppReducer from "./AppReducer";


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

// @ts-ignore
window.store = store

export default store