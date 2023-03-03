import React from 'react';
import {UsersType} from "../../redux/UsersReducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";

type UsersPropsType = {
    users: Array<UsersType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map(u => <User key={u.id}
                                        user={u}
                                        follow={props.follow}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}/>)}
        </div>
    )
}

export default Users