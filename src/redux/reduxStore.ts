import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


let rootReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPages: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer,
        auth: AuthReducer
    })

let store = createStore(rootReducers);

export type AppStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store

export default store