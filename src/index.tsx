import React from "react"
import ReactDOM from "react-dom"
import store from "./redux/reduxStore"
import App from "./App"
import './index.css'
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom"


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>, document.getElementById('root')
)
