import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/ProfileReducer";

type MyPostsType ={
    message: string
    posts: PostType[]
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.message))
        props.dispatch(changeNewTextAC(''))
    }
    let changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
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