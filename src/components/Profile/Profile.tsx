import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/state";

type ProfileType= {
    message: string
    posts: PostType[]
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     message={props.message}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;