import React from 'react';
import PropTypes from 'prop-types';
import ComunicadoItem from './ComunicadoItem';

const ComunicadoList = (props) => (
  <ul className="comunicados">
    {
      props.comunicados && props.comunicados.map((comunicado) => (
        <ComunicadoItem key={comunicado.id} {...comunicado}/>
      ))
    }
  </ul>
);

ComunicadoList.propTypes = {
  comunicados: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    seen: PropTypes.bool.isRequired,
    type: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    file: PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    })
  }))
};

export default ComunicadoList;
