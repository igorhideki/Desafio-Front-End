import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import api from '../requests/apis';
import ComunicadoItemFile from './ComunicadoItemFile';

class ComunicadoDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comunicado: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState(() => ({ isLoading: true }));
    api.loadComunicadoById(this.props.match.params.id)
      .then((res) => {
        this.setState({ comunicado: res.data });
        this.setState(() => ({ isLoading: false }));
        return res.data;
      })
      .then((data) => api.updateComunicado(this.props.match.params.id, { ...data, seen: true }))
    ;
  }

  handleCategoriaItem(type) {
    switch (type) {
      case 0:
        return { color: 'comunicados__item--orange', name: 'Informativos SUN' };
      case 1:
        return { color: 'comunicados__item--blue', name: 'Força de Vendas' };
      case 2:
        return { color: 'comunicados__item--green', name: 'Vivo Ligado' };
      case 3:
        return { color: 'comunicados__item--purple', name: 'Turbine Suas Vendas' };
      default:
        return { color: '', name: '' };
    }
  }

  handleFormatDate(date) {
    const parseDate = moment(date, 'YYYY-MM-DD HH:mm');
    return moment(parseDate).format('DD/MM/YYYY - HH[h]mm');
  }

  render() {
    return (
      <div className="container">
        <div className={`comunicados__item comunicados__item--no-pointer ${this.handleCategoriaItem(this.state.comunicado.type).color}`}>
          <div className="comunicados__row">
            <span className="comunicados__title">{this.state.comunicado.title}</span>
            <span className="comunicados__id">{this.state.comunicado.id}</span>
          </div>
          {this.state.comunicado.files && this.state.comunicado.files.length > 0 && this.state.comunicado.files.map((file) => {
            return <ComunicadoItemFile key={file.name} {...file} />;
          })}
          <div className="comunicados__row">
            <span className="comunicados__type">{this.handleCategoriaItem(this.state.comunicado.type).name}</span>
            <span className="comunicados__date">{this.handleFormatDate(this.state.comunicado.date)}</span>
          </div>
          <div className="mt-m">
            {this.state.comunicado.description !== '' && <p className="comunicados__subtitle">Resumo:</p>}
            <p className="comunicados__description">{this.state.comunicado.description}</p>
            {this.state.comunicado.description !== '' && <p className="comunicados__subtitle">Descrição:</p>}
            <p className="comunicados__description">{this.state.comunicado.fullDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

ComunicadoDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ComunicadoDetailsPage;
