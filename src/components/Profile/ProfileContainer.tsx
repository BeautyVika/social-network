import React from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfile, PostType, ProfileType} from "../../redux/ProfileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    messageForNewPost: string
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
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
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
