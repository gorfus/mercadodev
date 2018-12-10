import React, { Component } from 'react'
import {
    Link, Route
} from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Anuncio from './Anuncio'
const Categorias = ({ categorias }) => {
    return (
        <div>
            <HeaderInterno />
            <div className="container" style={{ padding: "120px" }}>
                <h1>Categorias</h1>
                <div className="row" >
                    <div className="col-lg-4" >
                        {
                            categorias
                                .map(cat =>
                                    <div key={cat.url}>
                                        <hr />
                                        <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link>
                                    </div>)
                        }
                    </div>
                    <div className="col-lg-8" >
                        <Route path='/categorias/:urlCategoria' exact component={Categoria} />
                        <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props)=><Anuncio  {...props}/>} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorias