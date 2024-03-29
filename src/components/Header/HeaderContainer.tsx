import React, {Component} from "react"
import Header from "./Header"
import {AppStateType} from "redux/reduxStore"
import {logout} from "redux/AuthReducer"
import {connect} from "react-redux"

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType ={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    logout: () => void
}

class HeaderContainer extends Component <HeaderContainerPropsType> {

    render () {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {logout})(HeaderContainer);