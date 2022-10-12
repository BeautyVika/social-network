import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/MyPost'
import {PostType} from "../../../redux/state";

type MyPostType ={
    posts: PostType[]
    addPost: (postMessage: string)=>void
    message: string
    changeNewText:  (newText: string) => void
}

const MyPosts = (props: MyPostType) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.addPost(props.message)
        props.changeNewText('')
    }
    let changeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
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