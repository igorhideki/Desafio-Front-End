import React, { Component } from 'react';
import CategoriaFilters from './CategoriaFilters';
import ComunicadoList from './ComunicadoList';
import api from '../requests/apis';

class ComunicadosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      categorias: [],
      comunicados: []
    };
  }

  componentDidMount () {
    this.setState({ isLoading: true });
    api.loadCategorias()
      .then((res) => {
        this.setState(() => ({ isLoading: false, categorias: res.data }));
      });
    api.loadComunicados()
      .then((res) => {
        this.setState(() => ({ isLoading: false, comunicados: res.data }));
      });
  }

  render() {
    return (
      <div className="container">
        <CategoriaFilters categorias={this.state.categorias}/>
        <ComunicadoList comunicados={this.state.comunicados}/>
      </div>
    );
  }
} 

export default ComunicadosPage;
