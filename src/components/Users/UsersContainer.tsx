import React, {Component} from 'react'
import {connect} from "react-redux"
import {AppStateType} from "redux/reduxStore"
import {
    setCurrentPage,
    requestUsers, follow, unfollow, UsersType, setPageSize,
} from "redux/UsersReducer"
import Users from "./Users"
import Preloader from "../Common/Preloader/Preloader"
import {compose} from "redux"
import {
    getUsers,
    getPageSize,
    getTotalUserCount,
    currentPage,
    isFetching,
    followingInProgress
} from "redux/selectors/UsersSelectors"

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    setPageSize: (pageSize: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends Component <UsersPropsType> {

    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props
        requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number, pageSize: number = 10) => {
        this.props.requestUsers(pageNumber, pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   pageSize={this.props.pageSize}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers, setPageSize})
)(UsersContainer)
