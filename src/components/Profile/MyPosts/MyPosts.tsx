import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {PostType} from "../../../redux/ProfileReducer";

type MyPostsType ={
    addPost: (message: string) => void
    updateNewPostText: (text: string) => void
    message: string
    posts: PostType[]
}

const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost(props.message)

    }
    let changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeNewTextHandler} value={props.message}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;