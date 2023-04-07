import React, {ChangeEvent, FC} from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { IconButton } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import defaultAvatar from "assets/img/user.webp"
import s from "components/Profile/ProfileInfo/ProfileAvatar/ProfileAvatar.module.css"

type ProfileAvatarPropsType = {
    avatar: string
    withButton?: boolean
    size: number
    changePhotoTC?: (photo: File) => void
}

const ProfileAvatar: FC<ProfileAvatarPropsType> = (
    {avatar, withButton, size, changePhotoTC}) => {

    const onChangePhoto = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0)
            changePhotoTC?.(event.target.files[0])
    }

    return (
        <div className={s.container}>
            <Avatar
                src={avatar ? avatar : defaultAvatar}
                style={{ width: `${size}px`, height: `${size}px`, position: 'absolute', bottom: '-117px',
                    left: '120px'}}
                alt="ava"
            />
            {withButton && (
                <label>
                    <input
                        type="file"
                        onChange={onChangePhoto}
                        style={{ display: 'none' }}
                        accept="image/png, image/jpeg, image/svg"
                    />
                    <IconButton
                        component="span"
                        style={{
                            fontSize: '2.5rem',
                            position: 'absolute',
                            bottom: '-114px',
                            right: '121px',
                            border: '1px solid #CA9CE1',
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