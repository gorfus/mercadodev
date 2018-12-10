import React, { Component } from 'react'
import base from './base'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import HeaderHome from './HeaderHome'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anuncios: []
        }

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios'
        })
    }
    render() {
        let index = 0;
        return (
            <div>
                <HeaderHome />
                <div className="container">
                    <h3>Ultimos Anuncios</h3>
                    <div className="row">
                        {
                            // this.state.anuncios.map((anuncio, indice) => {
                            //     return <AnuncioHome key={indice} anuncio={anuncio} />
                            // })

                            Object.keys(this.state.anuncios).map(key => {
                                return <AnuncioHome key={key} anuncio={this.state.anuncios[key]} />
                            })

                        }
                    </div>
                </div>
                <h3>Categorias</h3>
                <div className="row">
                    {
                        this.props.categorias.map((cat, indice) => {
                            return [
                                <LinkCategoria key={indice} categoria={cat} />,
                                ++index % 4 === 0 && <div key={"c" + indice} className="w-100"></div>
                            ]
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home