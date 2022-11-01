import React from 'react';
import {addPostAC, changeNewTextAC, ProfileReducerType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType ={
    profilePage: ProfileReducerType
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (message: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        updateNewPostText: (text) => {
            let action = changeNewTextAC(text)
            dispatch(action)
        },
        addPost: (message) => {
            dispatch(addPostAC(message))
            dispatch(changeNewTextAC(''))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
