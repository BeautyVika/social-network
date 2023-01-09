import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: any) => {
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
}

const AddNewPostForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' />
            </div>
            <div><button>Add post</button></div>
        </form>
        )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;