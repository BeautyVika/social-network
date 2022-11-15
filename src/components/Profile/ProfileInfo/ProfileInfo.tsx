import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/ProfileReducer";
import Preloader from "../../Common/Preloader/Preloader";

type ProfileInfoProps = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://naked-science.ru/wp-content/uploads/2020/03/1024px-Grand_Anse_Beach_Grenada.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large}/>
                <p>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}
export default ProfileInfo