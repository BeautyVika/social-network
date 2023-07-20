import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea} from "components/Common/FormsControls/FormsControls"
import {maxLengthCreator, required} from "utils/validators/validators"
import {MyPostFormType} from "components/Profile/MyPosts/MyPosts"
import s from "./AddNewPostForm.module.css"

const maxLength60 = maxLengthCreator(60)

const AddNewPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.field}>
                <Field component={Textarea}
                       name='newPostText'
                       validate={[required, maxLength60]}
                       placeholder='Post message'/>
            </div>

            <button className={s.btnPost}>Add post</button>

        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<MyPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)