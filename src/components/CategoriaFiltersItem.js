import React from 'react';
import PropTypes from 'prop-types';

const handleIsActive = (isActive, componentValue) => {
  return isActive === componentValue ? 'filter__item--active' : '';
};

const CategoriaFiltersItem = (props) => (
  <span className={`filter__item ${handleIsActive(props.filterActive, props.type)}`} onClick={() => {
    props.handleSelectCategoria(props.type);
  }}>
    {props.name}
  </span>
);

CategoriaFiltersItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  filterActive: PropTypes.number,
  handleSelectCategoria: PropTypes.func  
};


export default CategoriaFiltersItem;
