import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {PostType, ProfileType, setUserProfile} from "../../redux/ProfileReducer";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType | null
    posts: Array<PostType>
    messageForNewPost: string
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    messageForNewPost: state.profilePage.messageForNewPost
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
