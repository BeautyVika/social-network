import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {RootStateType} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppType = {
    state: RootStateType
    dispatch: (action: any) => void
}

const App = (props: AppType) => {

    const {state, dispatch} = props

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer state={state}
                                                                  dispatch={dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile state={state}
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
