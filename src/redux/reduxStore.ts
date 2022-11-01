import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";


let rootReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPages: dialogsReducer,
        sideBar: sidebarReducer
    })

let store = createStore(rootReducers);

export type AppStateType = ReturnType<typeof rootReducers>


export default store