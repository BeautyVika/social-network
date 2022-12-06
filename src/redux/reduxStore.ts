import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";


let rootReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPages: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        auth: AuthReducer
    })

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducers>
export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store

export default store