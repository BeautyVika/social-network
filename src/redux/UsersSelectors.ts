import {AppStateType} from "./reduxStore";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const currentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const isFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const followingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
