import React from 'react';
import s from './MyPost.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import defaultImg from "../../../../assets/img/user.webp"
import IconButton from "@mui/material/IconButton"

type MyPostPropsType = {
    id: string
    message: string
    likesCount: number
    avatar: string
    addLikes: (likes: number, id: string) => void
}

const MyPost = (props: MyPostPropsType) => {

    const addLikesHandler = () => {
        const likes = props.likesCount + 1
        props.addLikes(likes, props.id)
    }
    return (
        <div className={s.itemContainer}>

            <img src={props.avatar || defaultImg} alt='avatar' className={s.itemPhoto}/>
            {props.message}

            <div className={s.likeContainer}>
                <IconButton onClick={addLikesHandler} size={'small'}>
                    <FavoriteBorderIcon color={"secondary"} sx={{marginRight: '-8px'}}/>
                </IconButton>
                <div> {props.likesCount}</div>
            </div>
        </div>
    )
}
export default MyPost;