import React from 'react';
import {addPostAC, ProfileReducerType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "redux/reduxStore";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType ={
    profilePage: ProfileReducerType
}
type MapDispatchPropsType = {
    addPost: (message: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
