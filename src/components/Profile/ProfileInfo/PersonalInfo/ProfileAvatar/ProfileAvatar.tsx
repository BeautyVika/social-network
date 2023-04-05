import React, {FC} from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { IconButton } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import defaultAvatar from "assets/img/defaultAvatar.svg"
import s from "components/Profile/ProfileInfo/PersonalInfo/ProfileAvatar/ProfileAvatar.module.css"

type ProfileAvatarPropsType = {
    avatar: string | undefined
    withButton?: boolean
    size: number
}

const ProfileAvatar: FC<ProfileAvatarPropsType> = ({avatar, withButton, size}) => {

    return (
        <div className={s.container}>
            <Avatar
                src={avatar ? avatar : defaultAvatar}
                // style={{ width: `${size}px`, height: `${size}px`}}
                style={{ width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: '-117px',
                    left: '120px'}}
                alt="ava"
            />
            {withButton && (
                <label>
                    <input
                        type="file"
                        // onChange={e => uploadHandler(e, onChangeAvatar)}
                        style={{ display: 'none' }}
                        accept="image/png, image/jpeg, image/svg"
                    />
                    <IconButton
                        component="span"
                        style={{
                            fontSize: '2.5rem',
                            position: 'absolute',
                            bottom: '-82px',
                            right: '111px',
                            border: '1px solid #685F74',
                        }}
                    >
                        <CloudUploadIcon />
                    </IconButton>
                </label>
            )}
        </div>
    )
}
export default ProfileAvatar