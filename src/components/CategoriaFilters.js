import React from 'react';
import PropTypes from 'prop-types';
import CategoriaFiltersItem from '../components/CategoriaFiltersItem';

const CategoriaFilters = (props) => (
  <div className="filter">
    <label className="filter__label">Categorias</label>
    {
      props.categorias && props.categorias.map((categoria) => {
        return <CategoriaFiltersItem key={categoria.type} name={categoria.name} />;
      })
    }
  </div>
);

CategoriaFilters.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.number,
    name: PropTypes.string
  }))
};

export default CategoriaFilters;
