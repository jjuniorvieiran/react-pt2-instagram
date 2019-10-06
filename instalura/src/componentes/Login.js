import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {msg: this.props.location.search};
    }

    envia(event) {
        event.preventDefault();
        const resquetInfo = {
            method: 'POST',
            body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('https://instalura-api.herokuapp.com/api/public/login', resquetInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                console.log(token);
                localStorage.setItem('auth-token', token);
                this.props.history.push('/timeline');

            })
            . catch(error => {
                this.setState({msg:error.message});
            });
    }


    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="text" ref={(input) => this.senha = input} />
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}

export default withRouter(Login);