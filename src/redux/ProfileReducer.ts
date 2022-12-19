import {DispatchType} from "./reduxStore";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

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
    profile: ProfileType
}
type SetStatusACType ={
    type: typeof SET_STATUS
    status: string
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
export const setStatus = (status: string): SetStatusACType => {
    return{
        type: SET_STATUS,
        status
    }as const
}

let initialState: ProfileReducerType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'Bla-bla', likesCount: 10}
    ],
    messageForNewPost: '',
    profile: null,
    status: ''
}
export type ProfileReducerType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile:  ProfileType | null
    status: string
}
type ActionType = AddPostACType | ChangeNewTextACType | SetUserProfileACType | SetStatusACType

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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const getUserProfile = (userId: string) => {

    return (dispatch: DispatchType) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: string) => {

    return(dispatch: DispatchType) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status: string) => {

    return(dispatch: DispatchType) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer
