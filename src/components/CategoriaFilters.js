import React from 'react';
import PropTypes from 'prop-types';
import CategoriaFiltersItem from '../components/CategoriaFiltersItem';

const CategoriaFilters = (props) => (
  <div className="filter">
    <label className="filter__label">Categorias</label>
    {
      props.categorias && props.categorias.map((categoria) => {
        return (
          <CategoriaFiltersItem 
            key={categoria.type}
            name={categoria.name}
            type={categoria.type}
            filterActive={props.filterActive}
            handleSelectCategoria={props.handleSelectCategoria}
          />
        );
      })
    }
  </div>
);

CategoriaFilters.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.number,
    name: PropTypes.string
  })),
  handleSelectCategoria: PropTypes.func,
  filterActive: PropTypes.number
};

export default CategoriaFilters;
