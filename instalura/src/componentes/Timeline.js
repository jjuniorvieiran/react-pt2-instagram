import React, { Component } from 'react';
import FotoItem from "./Foto";

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentDidMount() {


        let urlPerfil;

        if(this.login === undefined) {
          urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`;
        } else {
          urlPerfil = `https://instalura-api.herokuapp.com/api/public/fotos/${this.props.login}`;
        }
  
        fetch(urlPerfil)
            .then(response => response.json()) // this statment return a promisse
            .then(fotos => { //using the promisses
                this.setState({ fotos: fotos });
            });
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto}/>)
                }
            </div>
        );
    }
}