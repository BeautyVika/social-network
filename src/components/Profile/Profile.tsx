import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import {PostType, ProfileType, UpdateUserType} from "redux/ProfileReducer"
import s from "./Profile.module.css"
import Preloader from "components/Common/Preloader/Preloader"
import {Redirect} from "react-router-dom"

type ProfilePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    updateStatus: (status: string) => void
    changePhotoTC: (photo: File) => void
    isAuth: boolean
    isOwner: boolean
    saveProfile: (profile: UpdateUserType) => void
}

const Profile = (props: ProfilePropsType) => {

    if(!props.isAuth) {
        return <Redirect to='/login' />
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img style={{ width: '101%', height:' 300px',objectFit: 'cover', borderRadius: '0%'}} alt='big content'
                     src='https://wallpapershome.ru/images/pages/pic_h/182.jpg'/>

            <div className={s.profileContainer}>
                <div className={s.containerInfo}>
                    <ProfileInfo profile={props.profile}
                                 isOwner={props.isOwner}
                                 changePhotoTC={props.changePhotoTC}
                                 status={props.status}
                                 saveProfile={props.saveProfile}
                                 updateStatus={props.updateStatus}/>
                </div>

               <div className={s.containerPosts}>
                   <MyPostsContainer/>
               </div>
            </div>
        </div>
    )
}
export default Profile;
