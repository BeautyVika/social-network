import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.webp";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: Array<UsersType>;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void;
};

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount > 50 ? 900 : props.totalUsersCount) / props.pageSize
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }
    return (
        <div>
            <div>
                {pages.map( (page) => {
                    return <span className={props.currentPage === page ? s.selectedPage : ''}
                                 key={page}
                                 onClick={(e) => props.onPageChanged(page)}>
                       {page}{' '}
                   </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                  alt='user photo'/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed

                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.unfollow( u.id)}>
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => props.follow( u.id)}>
                                Follow</button>
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