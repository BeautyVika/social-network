import React, {memo} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

type MyPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = memo((props: MyPostsPropsType) => {
    console.log('Me posts')

    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: MyPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

const AddNewPostForm: React.FC<InjectedFormProps<MyPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder='Post message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
        )
}

const AddNewPostFormRedux = reduxForm<MyPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;