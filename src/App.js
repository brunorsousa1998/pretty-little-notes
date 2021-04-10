import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Formulario from './components/Formulario/Formulario';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import Rodape from './components/Rodape/Rodape';

import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {notas : []};
  }

  criarNota(titulo, texto) {
    if (titulo != "" && texto != "") {

      const nota = {titulo, texto};
      
      this.setState({notas : [...this.state.notas, nota]});
    }
  }

  apagarNota(index) {

    let notas = this.state.notas;

    notas.splice(index, 1);
    this.setState({notas : notas});
  }

  render() {
    return (
      <section className="app">
        <Cabecalho />
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} apagarNota={this.apagarNota.bind(this)}/>
        <Rodape />
      </section>
    );
  }
}

export default App;
