import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import {PostType, ProfileType} from "redux/ProfileReducer"
import s from "./Profile.module.css"

type ProfilePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    updateStatus: (status: string) => void
    changePhotoTC: (photo: File) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <div >
                <img style={{ width: '101%', height:' 300px',objectFit: 'cover'}} alt='big content'
                     src='https://wallpapershome.ru/images/pages/pic_h/182.jpg'/>
            </div>

            <div className={s.profileContainer}>
                <ProfileInfo profile={props.profile}
                             changePhotoTC={props.changePhotoTC}
                             status={props.status}
                             updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;
