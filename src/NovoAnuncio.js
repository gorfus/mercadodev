import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'

class NovoAnuncio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        this.setState({
            success: true
        })

        const novoAnuncio = {
            nome: this.nome.value,
            descricao: this.descricao.value,
            preco: this.preco.value,
            vendedor: this.vendedor.value,
            telefone: this.telefone.value,
            foto: 'https://via.placeholder.com/150', //img.metadata.downloadURLs[0],
            categoria: this.categoria.value
        };
        base.push('anuncios', {
            data: novoAnuncio
        }).then((err) => {
            err && console.log(err);
        })

        // const file = this.foto.files[0]
        // const { name, size } = file;
        // const ref = storage.ref(name)
        // ref
        //     .put(file)
        //     .then(img => {
        //     })
    }

    render() {
        return (
            <div>

                {this.state.success && <Redirect to="/" />}

                <HeaderInterno />
                <div className="container" style={{ padding: "120px" }}>
                    <h1>Novo Anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" id="nome" ref={(ref) => this.nome = ref}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" className="form-control" id="descricao" ref={(ref) => this.descricao = ref}></input>

                        </div>

                        <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <select className="form-control" id="categoria" ref={(ref) => this.categoria = ref}>
                                {
                                    this.props.categorias.map(cat => <option key={cat.url} value={cat.url}> {cat.categoria}</option>)
                                }

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <input type="text" className="form-control" id="preco" ref={(ref) => this.preco = ref}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Foto</label>
                            <input type="file" className="form-control" id="nome" ref={(ref) => this.foto = ref}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" className="form-control" id="telefone" ref={(ref) => this.telefone = ref}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="vendedor">Vendedor</label>
                            <input type="text" className="form-control" id="vendedor" ref={(ref) => this.vendedor = ref}></input>
                        </div>
                        <button type="submit" className="btn btn-info">Salvar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NovoAnuncio