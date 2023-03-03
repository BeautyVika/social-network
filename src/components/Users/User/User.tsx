import React from 'react';
import s from "../Users.module.css";
import userPhoto from "../../../assets/img/user.webp";
import {UsersType} from "../../../redux/UsersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const User = (props: UserPropsType) => {
    let user = props.user
    return (
        <div>
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

            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>

        </div>
    )
}

export default User