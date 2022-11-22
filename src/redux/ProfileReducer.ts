const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

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
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: any
}
export type ProfileType ={
    aboutMe: string | null,
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    },
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    photos: {
        large: string | undefined,
        small: string | undefined
    },
    userId: number | null
}

export const addPostAC = (postMessage: string): AddPostACType=> {
    return {
        type: ADD_POST,
        postMessage
    } as const
}
export const changeNewTextAC = (newText: string): ChangeNewTextACType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText
    } as const
}
export const setUserProfile = (profile: ProfileType): SetUserProfileACType => {
    return{
        type: SET_USER_PROFILE,
        profile
    }as const
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'Bla-bla', likesCount: 10}
    ] as Array<PostType>,
    messageForNewPost: '',
    profile: null
}
export type ProfileReducerType = typeof initialState
type ActionType = AddPostACType | ChangeNewTextACType | SetUserProfileACType

const profileReducer = (state = initialState, action: ActionType):  ProfileReducerType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case CHANGE_NEW_TEXT:
        return {
            ...state,
            messageForNewPost: action.newText
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
export default profileReducer
