import React from "react"
import Profile from "./Profile"
import {AppStateType} from "redux/reduxStore"
import {connect} from "react-redux"
import {
    changePhotoTC,
    getStatus,
    getUserProfile,
    PostType,
    ProfileType, saveProfile,
    updateStatus, UpdateUserType
} from "redux/ProfileReducer"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux"

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
    changePhotoTC: (photo: File) => void
    saveProfile: (profile: UpdateUserType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type DataContainerComponentType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<DataContainerComponentType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<DataContainerComponentType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId )
        this.refreshProfile()
    }

    render (){
        return <Profile isOwner={!this.props.match.params.userId}
                        {...this.props}/>
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

    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, changePhotoTC, saveProfile}),
    withRouter
)(ProfileContainer)

