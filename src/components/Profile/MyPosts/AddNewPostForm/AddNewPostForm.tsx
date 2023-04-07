import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea} from "components/Common/FormsControls/FormsControls"
import {maxLengthCreator, required} from "utils/validators/validators"
import {MyPostFormType} from "components/Profile/MyPosts/MyPosts"
import s from './AddNewPostForm.module.css'

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.field}>
                <Field component={Textarea}
                       // style={{width: '90%', border: '2px solid #CA9CE1'}}
                       name='newPostText'
                       validate={[required, maxLength10]}
                       placeholder='Post message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostFormRedux = reduxForm<MyPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)