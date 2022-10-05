import React from 'react';

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
}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type SidebarType ={}

export type RootStateType= {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar?: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 15}
        ]
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
        ]
    },
        sidebar: {}
}
export default state
