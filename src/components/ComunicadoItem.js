import React from 'react';
import PropTypes from 'prop-types';

const ComunicadoItem = (props) => (
  <li>
    <h4>{props.title}</h4>
    <span>{props.type}</span>
    <span>{props.date}</span>
    <p>{props.description}</p>
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

