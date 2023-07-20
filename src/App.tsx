import React, {lazy} from "react"
import "./App.css"
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import Settings from "./components/Settings/Settings"
import Music from "./components/Music/Music"
import News from "./components/News/News"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import {connect} from "react-redux"
import {compose} from "redux"
import {AppStateType} from "redux/reduxStore"
import {initializeApp} from "redux/AppReducer"
import Preloader from "./components/Common/Preloader/Preloader"
import {withSuspense} from "hoc/WithSuspense"

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const ChatPage = lazy(() => import("./pages/Chat/ChatPage"))

type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapStatePropsType = {
    initialized: boolean
}
type AppContainerPropsType = MapDispatchPropsType & MapStatePropsType

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() =><Redirect to={'/login'}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/chat' component={withSuspense(ChatPage)}/>
                        <Route path='*' render={() => <div style={{
                            display: "flex",
                            alignItems: "flex-start",
                            width: "100%",
                            justifyContent: "center"
                        }}><h1>404: PAGE NOT FOUND</h1></div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

