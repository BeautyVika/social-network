import React from 'react';
import s from './MyPost.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import defaultImg from "../../../../assets/img/user.webp"

type MyPostPropsType = {
    id?: number
    message: string
    likesCount: number
    avatar: string
}

const MyPost = (props: MyPostPropsType) => {
    return (
        <div className={s.itemContainer}>

            <img src={props.avatar || defaultImg} alt='avatar' className={s.itemPhoto}/>
            {props.message}


            <div className={s.likeContainer}>
                <FavoriteBorderIcon fontSize='small'/>
                <div> {props.likesCount}</div>
            </div>
        </div>
    )
}
export default MyPost;