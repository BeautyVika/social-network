import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/ProfileReducer";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://naked-science.ru/wp-content/uploads/2020/03/1024px-Grand_Anse_Beach_Grenada.jpg' alt='background-photo'/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large} alt='avatar'/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<p>{props.profile.aboutMe}</p>*/}
            </div>
        </div>
    )
}
export default ProfileInfo