import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from "redux/ProfileReducer"
import Preloader from "../../Common/Preloader/Preloader"
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks"
import ProfileAvatar from "components/Profile/ProfileInfo/ProfileAvatar/ProfileAvatar"
import Paper from '@mui/material/Paper'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    changePhotoTC: (photo: File) => void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
                <Paper elevation={3} component={"div"} sx={{height: '400px', width: '100%'}}>
                    <ProfileAvatar avatar={props.profile?.photos.large}
                                   changePhotoTC={props.changePhotoTC}
                                   withButton
                                   size={200}/>
                    {/*<img src={props.profile?.photos.large} alt='avatar'/>*/}
                    <div className={s.infoContainer}>
                        <div className={s.name}>{props.profile?.fullName}</div>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    {/*<p>{props.profile.aboutMe}</p>*/}
                </Paper>
        </div>
    )
}
export default ProfileInfo