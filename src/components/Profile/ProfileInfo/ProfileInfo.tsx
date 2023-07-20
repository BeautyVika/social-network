import React, {FC, useState} from "react"
import s from "./ProfileInfo.module.css"
import {ProfileType, UpdateUserType} from "redux/ProfileReducer"
import Preloader from "../../Common/Preloader/Preloader"
import ProfileStatusWithHooks from "components/Profile/ProfileInfo/ProfileStatus/ProfileStatusWithHooks"
import ProfileAvatar from "components/Profile/ProfileInfo/ProfileAvatar/ProfileAvatar"
import Paper from "@mui/material/Paper"
import ProfileData from "components/Profile/ProfileInfo/ProfileData/ProfileData"
import {
    ProfileDataFormRedux,
    ProfileDataFormType
} from "components/Profile/ProfileInfo/ProfileData/ProfileDataForm/ProfileDataForm"

type ProfileInfoProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    changePhotoTC: (photo: File) => void
    isOwner: boolean
    saveProfile: (profile: UpdateUserType) => void
}

const ProfileInfo: FC<ProfileInfoProps> = ({profile,
                                           status,
                                           updateStatus,
                                           changePhotoTC,
                                           saveProfile,
                                           isOwner}) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: ProfileDataFormType) => {
        const userData: UpdateUserType = {
            userId: profile.userId,
            fullName: formData.fullName,
            aboutMe: formData.aboutMe,
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            contacts: {
                website: formData.website || null,
                github: formData.github || null,
                twitter: formData.twitter || null,
                instagram: formData.instagram || null,
                facebook: formData.facebook,
                vk: formData.vk || null,
                youtube: formData.youtube || null,
                mainLink: formData.mainLink || null
            }

        }
        saveProfile(userData)
        setEditMode(false)
    }

    if (!profile){
        return <Preloader/>
    }
    return (
        <div className={s.descriptionBlock}>
                <Paper elevation={3} component={"div"} sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <ProfileAvatar avatar={profile?.photos.large}
                                   changePhotoTC={changePhotoTC}
                                   isOwner={isOwner}
                                   size={200}/>

                    <div className={s.infoContainer}>
                        <div className={s.name}>{profile?.fullName}</div>

                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                        {editMode
                            ? <ProfileDataFormRedux onSubmit={onSubmit}
                                                    setEditMode={setEditMode}
                                                    initialValues={profile}/>
                            : <ProfileData profile={profile}/>}

                    </div>

                    {isOwner && !editMode && <button className={s.btn} onClick={() => setEditMode(true)}>Edit</button>}
                </Paper>
        </div>
    )
}

export default ProfileInfo
