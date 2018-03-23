import React, { Component } from 'react';
import CategoriaFilters from './CategoriaFilters';
import ComunicadoList from './ComunicadoList';
import api from '../requests/apis';
import selectComunicados from '../selectors/comunicados';

class ComunicadosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      categorias: [],
      comunicados: [],
      filters: {
        type: -1
      }
    };
    this.handleSelectCategoria = this.handleSelectCategoria.bind(this);
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

  handleSelectCategoria(type) {
    if (this.state.filters.type === type) {
      this.setState(() => ({ filters: { type: -1 } }));
    } else {
      this.setState(() => ({ filters: { type } }));
    }
  }

  render() {
    return (
      <div className="container">
        <CategoriaFilters categorias={this.state.categorias} handleSelectCategoria={this.handleSelectCategoria} filterActive={this.state.filters.type}/>
        <ComunicadoList comunicados={selectComunicados(this.state.comunicados, this.state.filters)}/>
      </div>
    );
  }
} 

export default ComunicadosPage;
