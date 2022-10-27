import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {RootStateType} from "./redux/reduxStore";


type AppType = {
    state: RootStateType
    dispatch: (action: any) => void
}

const App = (props: AppType) => {

    const {state, dispatch} = props

    let dialogsPage =state.dialogsPages
    let profilePage = state.profilePage

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={dialogsPage}
                                                                  dispatch={dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={profilePage}
                                                                  dispatch={dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
