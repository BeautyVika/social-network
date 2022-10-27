const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export type PostType = {
    id?: number
    message: string
    likesCount: number
}
type AddPostACType = {
    type: typeof ADD_POST
    postMessage: string
}
type ChangeNewTextACType = {
    type: typeof CHANGE_NEW_TEXT
    newText: string
}
export const addPostAC = (postMessage: string): AddPostACType=> {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const changeNewTextAC = (newText: string): ChangeNewTextACType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'Bla-bla', likesCount: 10}
    ] as Array<PostType>,
    messageForNewPost: ''
}
export type ProfileReducerType = typeof initialState

const profileReducer = (state = initialState, action: any):  ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state

        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText
            return state

        default:
            return state
    }
}
export default profileReducer
