import React from "react";
import ReactDOM from "react-dom";
import store, {RootStateType} from "./redux/reduxStore";
import App from "./App";
import './index.css'

let renderTree = (state: RootStateType)  => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})


