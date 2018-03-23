import React from 'react';
import PropTypes from 'prop-types';

const handleCategoriaItem = (type) => {
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
};

const ComunicadoItem = (props) => (
  <li className={`comunicados__item ${handleCategoriaItem(props.type).color}`}>
    <div className="comunicados__row">
      <span className="comunicados__title">{props.title}</span>
      <span className="comunicados__id">{props.id}</span>
    </div>
    <div className="comunicados__row">
      <span className="comunicados__type">{handleCategoriaItem(props.type).name}</span>
      <span className="comunicados__date">{props.date}</span>
    </div>
  </li>
);

ComunicadoItem.propTypes = {
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
};

export default ComunicadoItem;

