import profileReducer, {addPostAC, changeNewTextAC} from "./ProfileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

 type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

 type MessageType= {
    id: number
    message: string
}
type DialogType ={
    id: number
    name: string
}
 type PostType ={
    id?: number
    message: string
    likesCount: number
}
 type ProfilePageType ={
    posts: PostType[]
    messageForNewPost: string
}
 type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
 type SidebarType ={}

 type RootStateType= {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar?: SidebarType
}
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 15}
            ],
            messageForNewPost: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Vika'},
                {id: 2, name: 'Maxim'},
                {id: 3, name: 'Lucy'},
                {id: 4, name: 'Mum'},
                {id: 5, name: 'Julia'},
                {id: 6, name: 'Anastasia'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your education?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('state is changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState () {
        return this._state
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}



