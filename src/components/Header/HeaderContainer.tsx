import React, {Component} from 'react';
import Header from './Header'
import {AppStateType} from "../../redux/reduxStore";
import {AuthType, getAuthUserData, logout} from "../../redux/AuthReducer";
import {connect} from "react-redux";


type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType ={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends Component <HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render () {
        return <Header userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
                       logout={this.props.logout}/>
    }
}
let mapStateToProps = (state: AppStateType): AuthType => {

    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);