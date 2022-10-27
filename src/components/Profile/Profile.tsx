import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileReducerType} from "../../redux/ProfileReducer";

type ProfileType= {
    profilePage: ProfileReducerType
    dispatch: (action: any) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     message={props.profilePage.messageForNewPost}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;