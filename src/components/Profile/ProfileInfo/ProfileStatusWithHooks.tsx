import React, {ChangeEvent, useState} from 'react';
import {updateStatus} from "../../../redux/ProfileReducer";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditeMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditeMode(true)
    }
    const deactivateEditMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }
    const onStatusChange =(e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }


        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} autoFocus/>
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks