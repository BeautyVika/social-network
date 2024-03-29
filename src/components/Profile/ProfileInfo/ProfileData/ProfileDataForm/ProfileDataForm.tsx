import React, {FC} from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea, CheckBox} from "components/Common/FormsControls/FormsControls"
import {required} from "utils/validators/validators"
import s from "../ProfileData.module.css"

type ProfileDataType = {
    setEditMode: (editMode: boolean) => void
}

export type ProfileDataFormType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    website: string | null
    facebook: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null

}

const ProfileDataForm: FC<ProfileDataType & InjectedFormProps<ProfileDataFormType, ProfileDataType>> = (props) => {
    const contactModel = {
        facebook: props.initialValues.facebook,
        website: props.initialValues.website,
        vk: props.initialValues.vk,
        twitter: props.initialValues.twitter,
        instagram: props.initialValues.instagram,
        youtube: props.initialValues.youtube,
        github: props.initialValues.github,
        mainLink: props.initialValues.mainLink,
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {props.error && <div className={s.error}> {props.error} </div>}
            <Field component={Textarea}
                   name='fullName'
                   type='text'
                   validate={[required]}
                   placeholder='Full name'/>
            <Field component={Textarea}
                   name='aboutMe'
                   type='text'
                   validate={[required]}
                   placeholder='About Me'/>
            <Field component={CheckBox}
                   name='lookingForAJob'
                   type='checkbox'
                   label='Looking for a job'/>
            <span>Looking for a job</span>
            <Field component={Textarea}
                   name='lookingForAJobDescription'
                   type='text'
                   validate={[required]}
                   placeholder='Skills'/>

            <span>Contacts:</span>
            {Object.keys(contactModel)
                .map(key => <Field placeholder={key}
                                   key={key}
                                   type='text'
                                   name={key}
                                   component={Textarea}
            />)}

            <div className={s.btnGroup}>
                <button className={`${s.btn} ${s.btnEdit}`}>Save</button>
                <button className={`${s.btn} ${s.btnCancel}`} onClick={() => props.setEditMode(false)}>Cancel</button>
            </div>
        </form>
    )
}
export const ProfileDataFormRedux = reduxForm<ProfileDataFormType, ProfileDataType>({form: 'ProfileInfo'})(ProfileDataForm)
