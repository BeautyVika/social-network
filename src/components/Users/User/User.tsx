import React from "react"
import s from "./User.module.css"
import userPhoto from "../../../assets/img/user.webp"
import {UsersType} from "redux/UsersReducer"
import {NavLink} from "react-router-dom"

type UserPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const User = (props: UserPropsType) => {
    let user = props.user
    return (
        <div className={s.userContainer}>
                 <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt='user photo'/>
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => props.unfollow(user.id)}>
                            Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => props.follow(user.id)}>
                            Follow</button>
                    }
                </div>
            </span>

            <div className={s.userInfo}>
                <div className={s.nameUser}> Name: {user.name}</div>
                <div className={s.statusUser}> Status: {user.status}</div>
            </div>

        </div>
    )
}

export default User