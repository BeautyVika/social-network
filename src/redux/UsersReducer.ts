const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

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
type SetTotalUsersCountACType = {
    type: typeof SET_USERS_TOTAL_COUNT
    totalCount: number
}
type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const follow = (userId: number) : FollowACType => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollow = (userId: number) : UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: Array<UsersType>) : SetUsersACType => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageACType => {
    return{
        type: SET_CURRENT_PAGE,
        pageNumber
    }as const
}
export const setTotalUsersCount = (totalUsersCount: number) : SetTotalUsersCountACType => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount: totalUsersCount
    }as const
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }as const
}
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export type UsersReducerType = typeof initialState
type ActionType = ToggleIsFetchingACType | SetCurrentPageACType | SetUsersACType | UnfollowACType | FollowACType | SetTotalUsersCountACType

 const usersReducer = (state = initialState, action: ActionType):  UsersReducerType => {
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
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export default usersReducer
