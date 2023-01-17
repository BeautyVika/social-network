import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getStatus, getUserProfile, PostType, ProfileType, updateStatus} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type DataContainerComponentType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<DataContainerComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = `${this.props.authorizedUserId}`
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render (){
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose <React.ComponentType>(

    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)

