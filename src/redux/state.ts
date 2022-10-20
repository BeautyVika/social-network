export type StoreType = {
    _state: RootStateType
    // _changeNewText: (newText: string) => void
    _callSubscriber: () => void
    // _addPost: (postMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type MessageType= {
    id: number
    message: string
}
export type DialogType ={
    id: number
    name: string
}
export type PostType ={
    id?: number
    message: string
    likesCount: number
}
export type ProfilePageType ={
    posts: PostType[]
    messageForNewPost: string
}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody: string
}
type SidebarType ={}

export type RootStateType= {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar?: SidebarType
}
type ActionNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
type ActionSendMessage = {
    type: 'SEND-MESSAGE'
}
export type ActionsTypes =ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> |
                           ActionNewMessageBody | ActionSendMessage

export const addPostAC = (postMessage: string)=> {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const sendMessageAC = (): ActionSendMessage => {
    return {
        type: "SEND-MESSAGE"
    }
}
export const updateNewMessageBodyAC = (body: string): ActionNewMessageBody => {
    return{
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    }
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
    // _addPost (postMessage: string)  {
    //     const newPost: PostType = {
    //         id: 5,
    //         message: postMessage,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.messageForNewPost = ''
    //     this._callSubscriber()
    // },
    // _changeNewText (newText: string) {
    //     this._state.profilePage.messageForNewPost = newText
    //     this._callSubscriber()
    // },
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._callSubscriber()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY'){
            this._state.dialogPage.newMessageBody = action.body
            this._callSubscriber()
        }else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.messages.push({id: 6, message: body})
            this._callSubscriber()
        }
    }
}

export default store

