import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {PostType, ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    messageForNewPost: string
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type DataContainerComponentType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<DataContainerComponentType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    messageForNewPost: state.profilePage.messageForNewPost
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
