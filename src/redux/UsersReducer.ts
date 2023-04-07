import {usersAPI} from "api/api"
import {AppThunkType} from "./reduxStore"

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_PAGE_SIZE = 'SET-PAGE-SIZE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

 export const usersReducer = (state = initialState, action: UsersActionsType):  UsersReducerType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

//actions
export const followSuccess = (userId: number) : FollowACType => {
    return {type: FOLLOW, userId} as const
}
export const unfollowSuccess = (userId: number) : UnfollowACType => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsers = (users: Array<UsersType>) : SetUsersACType => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageACType => {
    return{type: SET_CURRENT_PAGE, pageNumber}as const
}
export const SetPageSizeAC = (pageSize: number): SetPageSizeACType => {
    return {type: SET_PAGE_SIZE, pageSize} as const
}
export const setTotalUsersCount = (totalUsersCount: number) : SetTotalUsersCountACType => {
    return {type: SET_USERS_TOTAL_COUNT, totalCount: totalUsersCount}as const
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}as const
}

//thunks
export const requestUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (id: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.follow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
    }
}
export const unfollow = (id: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unfollow(id).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
    }
}
//types
export type UsersReducerType = typeof initialState
export type UsersActionsType = ToggleIsFetchingACType | SetCurrentPageACType | SetUsersACType | UnfollowACType | FollowACType
    | SetTotalUsersCountACType | ToggleFollowingProgressType | SetPageSizeACType

export type UsersType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}

type FollowACType = {
    type: typeof FOLLOW,
    userId: number
}
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber:number
}
 type SetPageSizeACType = {
    type: typeof SET_PAGE_SIZE
    pageSize: number
}
type SetTotalUsersCountACType = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalCount: number
}
type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export default usersReducer