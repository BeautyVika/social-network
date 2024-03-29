import {AppThunkType} from "./reduxStore"
import {profileAPI} from "api/api"
import {v1} from "uuid"
import {stopSubmit} from "redux-form"

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const UPDATE_PHOTO = 'profile/UPDATE-PHOTO'
const DELETE_POST = 'profile/DELETE-POST'
const ADD_LIKES = 'profile/ADD-LIKES'

let initialState: ProfileReducerType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 15},
        {id: v1(), message: 'I\'m ok', likesCount: 10}
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
    | SetStatusACType | DeletePostACType | ChangeAvatarACType | AddLikesACType

const profileReducer = (state = initialState, action: ProfileActionsType):  ProfileReducerType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
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
        case ADD_LIKES:
            return {...state, posts: state.posts.map(el => el.id === action.id ? {...el, likesCount: action.likes} : el)}

        default:
            return state
    }
}
//actions
export const addPostAC = (postMessage: string): AddPostACType=> {
    return {type: ADD_POST, postMessage} as const
}
export const deletePostAC = (id: string)=> {
    return {type: DELETE_POST, id} as const
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
export const addLikes = (likes: number, id: string): AddLikesACType => {
    return {type: ADD_LIKES,id, likes} as const
}
//thunks
export const getUserProfile = (userId: number): AppThunkType => {

    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
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
export const saveProfile = (profile: UpdateUserType): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateProfile(profile).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(profile.userId))
            }else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('ProfileInfo', {_error: message}))
            }
        })
    }
}
//types
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DeletePostACType = ReturnType<typeof deletePostAC>

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
type AddLikesACType = {
    type: typeof ADD_LIKES
    likes: number
    id: string
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
export type UpdateUserType = {
    userId: number
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        website: string | null
        github: string | null
        twitter: string | null
        instagram: string | null
        facebook: string | null
        vk: string | null
        youtube: string | null
        mainLink: string | null
    }
}

export default profileReducer