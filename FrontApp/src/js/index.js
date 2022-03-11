import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./redusers";
import {BrowserRouter as Router} from "react-router-dom";
import {Application} from "./containers/Application";
import {Route, Routes} from "react-router";
import {Posts} from "./containers/Posts";
import {Profile} from "./containers/Profile";

console.log("Hello World!");

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path={'/'} element={<Application />}/>
            </Routes>
            <Routes>
                <Route exact path="/posts" element={<Posts />} />
            </Routes>
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    </Provider>
    , document.getElementById("application"))
