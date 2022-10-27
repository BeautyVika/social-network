import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/reduxStore";

type MyPostsContainerType ={
    dispatch: (action: any) => void
    state: RootStateType
}

const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.state.profilePage

    let onAddPost = (message: string) => {
        props.dispatch(addPostAC(message))
        props.dispatch(changeNewTextAC(''))
    }
    let onPostChange = (text: string) => {
        let action = changeNewTextAC(text)
        props.dispatch(action)
    }

    return <MyPosts updateNewPostText={onPostChange} addPost={onAddPost}
                posts={state.posts} message={state.messageForNewPost}/>
}
export default MyPostsContainer;