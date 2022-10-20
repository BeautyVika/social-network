import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/state";
import App from "./App";
import './index.css'

let renderTree = ()  => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}
renderTree()
store.subscribe(renderTree)
