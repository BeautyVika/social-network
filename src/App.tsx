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
import { StoreType} from "./redux/store";


type AppType = {
    store: StoreType
}

const App = (props: AppType) => {
    const state = props.store.getState()

    let dialogs =state.dialogPage.dialogs
    let messages =state.dialogPage.messages
    let posts = state.profilePage.posts
    let message = state.profilePage.messageForNewPost
    let newMessageBody = state.dialogPage.newMessageBody

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}
                                                                  messages={messages}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newMessageBody={newMessageBody}/>}/>
                    <Route path='/profile' render={() => <Profile posts={posts}
                                                                  message={message}
                                                                  dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
