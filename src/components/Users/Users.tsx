import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
                followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
                followed: true, fullName: 'Alexandr', status: 'I am a boss too', location: {city: 'Moskow', country: 'Russia'}},
            {id: 1, photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4cad62d0-be24-4f96-8b54-1edbc54ffe4c/280x420',
                followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
        ])
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoURL}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users