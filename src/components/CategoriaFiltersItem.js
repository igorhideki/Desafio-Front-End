import React from 'react';
import PropTypes from 'prop-types';

const CategoriaFiltersItem = (props) => (
  <span className="filter__item">
    {props.name}
  </span>
);

CategoriaFiltersItem.propTypes = {
  name: PropTypes.string.isRequired
};


export default CategoriaFiltersItem;
