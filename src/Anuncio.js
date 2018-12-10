import React, { Component } from 'react'
import axios from 'axios'

class Anuncio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncio: {}
        }
        const id = this.props.match.params.idAnuncio
        console.log("id:", id)
        const url = `https://mercadodev-84db8.firebaseio.com/anuncios/${id}.json`;

        axios
            .get(url)
            .then(data => {
                this.setState({ anuncio: data.data })
            })
    }

    render() {
        const anuncio = this.state.anuncio
        return (
            <div className="col-lg-8 col-md-8 sm-8">
            <h3>detalhes:</h3>
                <div className="card h-100">
                    <span >
                        <img className="card-img-top" src={anuncio.foto} alt="" />
                    </span>
                    <div className="card-body">
                        <h4 className="card-title">
                            {anuncio.nome}
                        </h4>
                        <span className="badge badge-primary">{anuncio.categoria}</span>
                        <h5>{anuncio.preco}</h5>
                        <p className="card-text">{anuncio.descricao}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Anuncio
