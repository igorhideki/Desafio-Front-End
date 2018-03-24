import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../requests/apis';
import ComunicadoDetailsItem from './ComunicadoDetailsItem';
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

  render() {
    return (
      <div className="container">
        {!this.state.isLoading
          ? <ComunicadoDetailsItem comunicado={this.state.comunicado} />
          : <span><i className="fas fa-spinner fa-pulse mr-xs"></i> Aguarde, carregando...</span>
        }
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
