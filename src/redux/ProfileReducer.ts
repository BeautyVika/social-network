import {AppThunkType} from "./reduxStore";
import {profileAPI, usersAPI} from "api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const UPDATE_PHOTO = 'UPDATE-PHOTO'

let initialState: ProfileReducerType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'I\'m ok', likesCount: 10}
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}
export type ProfileReducerType = {
    posts: Array<PostType>
    profile:  ProfileType
    status: string
}
export type ProfileActionsType = AddPostACType | SetUserProfileACType
    | SetStatusACType | DeletePostActionType | ChangeAvatarACType

const profileReducer = (state = initialState, action: ProfileActionsType):  ProfileReducerType => {
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
        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.id)
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_PHOTO:
            return {
            ...state,
            profile: {
                ...state.profile,
                photos: {
                    ...state.profile.photos,
                    ...action.photos
                }
            }
        }
        default:
            return state
    }
}
//actions
export const addPostAC = (postMessage: string): AddPostACType=> {
    return {
        type: ADD_POST,
        postMessage
    } as const
}

export const deletePostAC = (id: number)=> {
    return {type: 'DELETE-POST', id} as const
}
export const setUserProfile = (profile: ProfileType): SetUserProfileACType => {
    return{type: SET_USER_PROFILE, profile}as const
}
export const setStatus = (status: string): SetStatusACType => {
    return{type: SET_STATUS, status}as const
}
export const changeAvatar = (photos: PhotosType): ChangeAvatarACType => {
    return {type: UPDATE_PHOTO, photos} as const
}
//thunks
export const getUserProfile = (userId: string): AppThunkType => {

    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: string): AppThunkType => {
    return(dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus = (status: string): AppThunkType => {
    return(dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}
export const changePhotoTC = (photo: File): AppThunkType => {
    return (dispatch) => {
        profileAPI.updatePhoto(photo).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(changeAvatar(response.data.data.photos))
            }
        })
    }
}
//types
export type PostType = {
    id?: number
    message: string
    likesCount: number
}
export type DeletePostActionType = ReturnType<typeof deletePostAC>

type AddPostACType = {
    type: typeof ADD_POST
    postMessage: string
}
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusACType ={
    type: typeof SET_STATUS
    status: string
}
type ChangeAvatarACType = {
    type: typeof UPDATE_PHOTO
    photos: PhotosType
}
export type ProfileType ={
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    },
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    },
    userId: number
}
type PhotosType = {
    large: string
    small: string
}

export default profileReducer