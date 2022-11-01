import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {MyPostsPropsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost(props.profilePage.messageForNewPost)
    }
    let changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeNewTextHandler} value={props.profilePage.messageForNewPost}/>
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