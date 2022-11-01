const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
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
export const followAC = (userId: number) : FollowACType => {
    return {
        type: FOLLOW,
        userId: userId

    } as const
}
export const unfollowAC = (userId: number) : UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>) : SetUsersACType => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

let initialState = {
    users: [
        // {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
        //     followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
        //     followed: true, fullName: 'Alexandr', status: 'I am a boss too', location: {city: 'Moskow', country: 'Russia'}},
        // {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
        //     followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
    ] as Array<UsersType>
}
export type UsersReducerType = typeof initialState

const usersReducer = (state = initialState, action: any):  UsersReducerType => {
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export default usersReducer
