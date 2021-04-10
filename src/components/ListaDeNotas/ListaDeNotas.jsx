import React, { Component } from "react";
import Nota from "../Nota/Nota";

import "./estilo.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.map((nota, indice) => {
          return (
            <li key={indice}>
              <Nota titulo={nota.titulo} texto={nota.texto} indice={indice} apagarNota={this.props.apagarNota} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
