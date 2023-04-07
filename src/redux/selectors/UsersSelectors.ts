import {AppStateType} from "redux/reduxStore";
import {createSelector} from "reselect";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector( getUsersSelector, (users) => {
   return users.filter(u => true)
})

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
