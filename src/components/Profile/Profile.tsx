import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStateType} from "../../redux/reduxStore";

type ProfileType= {
    state: RootStateType
    dispatch: (action: any) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
