import React, {Component} from 'react';
import Header from './Header'
import {AppStateType} from "../../redux/reduxStore";
import {getAuthUserData} from "../../redux/AuthReducer";
import {connect} from "react-redux";


type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType ={
    userId: number
    email: string
    login: string,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends Component <HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render () {
        return <Header userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
                       isAuth={this.props.isAuth}/>
    }
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);