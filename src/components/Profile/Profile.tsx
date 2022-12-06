import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType, ProfileType} from "../../redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    messageForNewPost: string
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
