import React, { Component } from 'react';
import FotoItem from "./Foto";

export default class Timeline extends Component {
    constructor() {
        super();
        this.state = { fotos: [] };
    }

    componentDidMount() {
        fetch('https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN='.concat(localStorage.getItem('auth-token'))) // this statment return a promisse
            .then(response => response.json()) // this statment return a promisse
            .then(fotos => { //using the promisses
                this.setState({ fotos: fotos });
            });
    }

    render() {
        return (
            <div className="fotos container">
                {
                    this.state.fotos.map(foto => <FotoItem foto={foto}/>)
                }
            </div>
        );
    }
}