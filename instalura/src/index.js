import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

function isNotLoggedIn() {

    if (localStorage.getItem('auth-token') == null) {
        return true;
    } else {
        return false;
    }
}

ReactDOM.render(
    (
        <BrowserRouter>
            <Route path="/" component={Login} />
            <Route path="/logout" component={Logout}/>
            <Route path="/timeline(/:login)" component={App}/>    

            {/* <Route path="/timeline" component={App} onEnter={verificaAutenticacao}/> */}
            <Route exact path="/timeline" render={() => (
                isNotLoggedIn() ? (
                    <Redirect to="/?msg=vc precisa estar logado" />
                ) : (
                        <App />
                    )
            )} />
        </BrowserRouter>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




