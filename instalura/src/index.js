import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import {Route, BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    (
        <BrowserRouter>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App} />
        </BrowserRouter>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




