import React from 'react';
import s from './MyPost.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type MyPostPropsType = {
    id?: number
    message: string
    likesCount: number
    avatar: string
}

const MyPost = (props: MyPostPropsType) => {
    return(
            <div className={s.item} >
                <img src={props.avatar} alt='avatar'/>
                {props.message}
                <div className={s.likeContainer}>
                    <FavoriteBorderIcon fontSize='small'/>
                    <div> {props.likesCount}</div>
                </div>
            </div>
        )
}
export default MyPost;