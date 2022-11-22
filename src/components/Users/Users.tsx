import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.webp";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import { usersAPI} from "../../api/api";


type UsersPropsType = {
    users: Array<UsersType>;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
};

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 key={p}
                                 onClick={(e) => props.onPageChanged(p)}>
                       {p}
                   </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                usersAPI.unfollow(u.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {

                                usersAPI.follow(u.id).then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users