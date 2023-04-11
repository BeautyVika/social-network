import React, {memo} from 'react'
import s from './MyPosts.module.css'
import MyPost from './Post/MyPost'
import {MyPostsPropsType} from "./MyPostsContainer"
import Paper from '@mui/material/Paper'
import {AddNewPostFormRedux} from "components/Profile/MyPosts/AddNewPostForm/AddNewPostForm"

export type MyPostFormType = {
    newPostText: string
    addLikes: (likes: number, id: string) => void
}

const MyPosts = memo((props: MyPostsPropsType) => {

    let postsElement = props.profilePage.posts.map(p =>
        <MyPost avatar={props.profilePage.profile.photos.large}
                key={p.id}
                id={p.id}
                addLikes={props.addLikes}
                message={p.message}
                likesCount={p.likesCount}/>)

    let onAddPost = (values: MyPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <Paper elevation={3} component={"div"} sx={{width: '100%'}}>
                <h3>My posts</h3>

                <AddNewPostFormRedux onSubmit={onAddPost}/>

                <div className={s.posts}>
                    {postsElement}
                </div>
            </Paper>
        </div>
    )
})

export default MyPosts;