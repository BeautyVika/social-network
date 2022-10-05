import React from 'react';
import s from './MyPost.module.css'
import {PostType} from "../../../../redux/state";


const MyPost = (props: PostType) => {
    return(
            <div className={s.item} >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' alt='avatar'/>
                {props.message}
                <div>
                    <span>like {props.likesCount}</span>
                </div>
            </div>
        )
}
export default MyPost;