import React, {FC} from "react"
import {ProfileType} from "redux/ProfileReducer"
import Contact from "components/Profile/ProfileInfo/ProfileData/Contact/Contact"
import s from "./ProfileData.module.css"

type ProfileDataPropsType = {
    profile: ProfileType
}

const ProfileData: FC<ProfileDataPropsType> = ({profile}) => {

    return (
        <div className={s.profileData}>
            <span>About me:{profile.aboutMe}</span>
            <span>Looking for a job:{profile.lookingForAJob ? '🙋' : '🙅'}</span>

            {profile.lookingForAJob && <span>
                My professional skills:{profile.lookingForAJobDescription}</span>}

            <span>Contacts:
                {Object.entries(profile.contacts).map(elem => <Contact key={elem[0]} title={elem[0]} link={elem[1]}/> )}
            </span>

        </div>
    )
}
export default ProfileData