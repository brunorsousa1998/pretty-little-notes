import React, { Component } from "react";

import "./estilo.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  
  _handleTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  _handleTexto(e) {
    e.stopPropagation();
    this.texto = e.target.value
  }

  _criarNota(e) {
    e.preventDefault();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <input className="formulario__titulo" type="text" placeholder="Titulo..." maxLength="24" onChange={this._handleTitulo.bind(this)}></input>
        <textarea className="formulario__texto" placeholder="Nota..." maxLength="256" onChange={this._handleTexto.bind(this)}></textarea>
        <button className="formulario__botao">Criar</button>
      </form>
    );
  }
}

export default Formulario;
