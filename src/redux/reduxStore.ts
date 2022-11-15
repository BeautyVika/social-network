import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";


let rootReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPages: dialogsReducer,
        sideBar: sidebarReducer,
        usersPage: usersReducer
    })

let store = createStore(rootReducers);

export type AppStateType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store

export default store