import React, { Component } from 'react'
import axios from 'axios'

import AnuncioHome from './AnuncioHome'

class Categoria extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncios: {},
            anunciosTodos: {},
            isLoading: false
        }

        this.loadAnuncios = this.loadAnuncios.bind(this);
        this.loadAnuncios(this.props.match.params.urlCategoria);
    }

    loadAnuncios(urlCategoria) {
        this.setState({
            anuncios: {},
            anunciosTodos: {},
            isLoading: true
        });
        //carregar dados
        const urlTodos = "https://mercadodev-84db8.firebaseio.com/anuncios.json";
        axios
            .get(urlTodos)
            .then(data => {
                this.setState({ anunciosTodos: data.data, isLoading: false });
            })

        const url = `https://mercadodev-84db8.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`;
        axios
            .get(url)
            .then(data => {
                this.setState({ anuncios: data.data, isLoading: false });
                this.categoria = urlCategoria
            })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.urlCategoria) {
            if (this.categoria !== newProps.match.params.urlCategoria) {
                this.loadAnuncios(newProps.match.params.urlCategoria)
            }
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {
                        JSON.stringify(this.props.match.params.urlCategoria)
                    }

                </h1>
                <hr />

                <div className="row">
                    <div className="col-lg-12">
                        {
                            !this.state.isLoading && Object.keys(this.state.anuncios).length === 0 && <p>nenhum produto cadastrado</p>
                        }
                    </div>
                </div>
                {
                    this.state.isLoading && <span>carrengando</span>
                }
                <div className="row">
                        {
                            Object
                                .keys(this.state.anuncios)
                                .map(key => <AnuncioHome key={key} id={key} anuncio={this.state.anuncios[key]} />)
                        }
                </div>
            </div>
        )
    }
}


export default Categoria