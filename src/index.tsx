import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/reduxStore";
import App from "./App";
import './index.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);



// let renderTree = (state: RootStateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>, document.getElementById('root')
//     );
// }
// renderTree(store.getState())
//
// store.subscribe(() => {
//     let state = store.getState()
//     renderTree(state)
// })
