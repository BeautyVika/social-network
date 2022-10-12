import React from "react";
import ReactDOM from "react-dom";
import state, {addPost, changeNewText, RootStateType} from "./redux/state";
import App from "./App";
import './index.css'
import {subscribe} from "./redux/state";

let renderTree = ()  => {
    ReactDOM.render(
        <App state={state} addPost={addPost} changeNewText={changeNewText}/>,
        document.getElementById('root')
    );
}
renderTree()
subscribe(renderTree)