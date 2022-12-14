import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfile, PostType, ProfileType} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    messageForNewPost: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type DataContainerComponentType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<DataContainerComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render (){
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    messageForNewPost: state.profilePage.messageForNewPost,
})

export default compose <React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)

