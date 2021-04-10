import React, { Component } from 'react';

import {ReactComponent as GitHubSVG} from "../../assets/img/github.svg";

import "./estilo.css";

class Rodape extends Component {
  render() { 
    return (
      <footer className="rodape">
        <p className="rodape__informacao">Designed by Bruno Sousa</p>
        <a href="https://github.com/brunorsousa1998">
          <GitHubSVG className="rodape__icone"/>
        </a>
      </footer>
    );
  }
}
 
export default Rodape;