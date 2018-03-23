import React from 'react';
import PropTypes from 'prop-types';

const ComunicadoItem = (props) => (
  <li className="comunicados__item">
    <div className="comunicados__indicador"></div>
    <div className="d-flex">
      <span className="comunicados__title mr-auto">{props.title}</span>
      <span className="comunicados__id">{props.id}</span>
    </div>
    <div className="d-flex">
      <span className="comunicados__type mr-auto">{props.type}</span>
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

