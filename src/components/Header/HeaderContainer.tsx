import React, {Component} from 'react';
import Header from './Header'
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {setAuthUserDataAC} from "../../redux/AuthReducer";
import {connect} from "react-redux";

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType ={
    userId: number
    email: string
    login: string,
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserDataAC: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends Component <HeaderContainerPropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render () {
        return <Header userId={this.props.userId}
                       email={this.props.email}
                       login={this.props.login}
                       isAuth={this.props.isAuth}
                       setAuthUserDataAC={this.props.setAuthUserDataAC}/>
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


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);