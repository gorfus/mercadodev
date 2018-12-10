import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import base from './base'

//components
import Footer from './footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import Categorias from './Categorias'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        categorias: [],
    }

    base.bindToState('categorias', {
        context: this,
        state: 'categorias'
    })
  }

  render() {
    return (
      <Router >
        <div className="app">
          <Route path="/" exact render={()=><Home categorias={this.state.categorias} />} />
          <Route path="/new" exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <Route path="/categorias" render={() => <Categorias categorias={this.state.categorias}/>}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
