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
import {addPost, changeNewText, RootStateType} from "./redux/state";


type AppType = {
    state: RootStateType
    addPost: (postMessage: string)=>void
    changeNewText: (newText: string) => void
}

const App = (props: AppType) => {

    let dialogs = props.state.dialogPage.dialogs
    let messages =props.state.dialogPage.messages
    let posts = props.state.profilePage.posts
    let message = props.state.profilePage.messageForNewPost

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={posts}
                                                                  changeNewText={props.changeNewText}
                                                                  message={message}
                                                                  addPost={props.addPost}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
