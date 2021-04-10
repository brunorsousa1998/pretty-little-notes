import React, { Component } from 'react';

import "./estilo.css";

class Cabecalho extends Component {
  render() { 
    return (
      <header className="cabecalho">
        <h1 className="cabecalho__titulo">Pretty Little <span>Notes</span></h1>
      </header>
    );
  }
}
 
export default Cabecalho;