import React, {ChangeEvent, useEffect, useState} from "react"
import {TextField} from "@mui/material"

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    let [editMode, setEditeMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditeMode(true)
    }
    const deactivateEditMode = () => {
        setEditeMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div style={{
            height: 'max-content',
            fontWeight: 'bold',
            width: '100%',
            wordBreak: 'break-word',
        }}>
            Status:
            {editMode
                ? <TextField onChange={onStatusChange}
                             onBlur={deactivateEditMode}
                             value={status}
                             color='secondary'
                             variant="standard"
                             autoFocus/>
                : <span style={{
                    fontStyle: 'italic',
                    minWidth: '100px',
                    minHeight: '12px',
                    cursor: 'pointer',
                    fontWeight: 'normal'
                }}
                        onDoubleClick={activateEditMode}>
                            {props.status || 'No status'}
                </span>
            }
        </div>
    )
}

export default ProfileStatusWithHooks