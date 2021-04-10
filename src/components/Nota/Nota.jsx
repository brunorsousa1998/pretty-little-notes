import React, { Component } from "react";

import "./estilo.css";

import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class Nota extends Component {
  constructor(props) {
    super(props);
  }

  apagarNota() {

    const indice = this.props.indice;

    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="nota">
        <h3 className="nota__titulo">{this.props.titulo}</h3>
        <div className="nota__divisoria"></div>
        <p className="nota__texto">{this.props.texto}</p>
        <DeleteSVG className="nota__icone" onClick={this.apagarNota.bind(this)}/>
      </section>
    );
  }
}

export default Nota;
