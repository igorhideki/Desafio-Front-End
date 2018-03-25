import React from 'react';
import { shallow } from 'enzyme';
import CategoriaFilters from '../../components/CategoriaFilters';
import categorias from '../fixtures/categorias';

test('should render CategoriasFilters correctly', () => {
  const wrapper = shallow(<CategoriaFilters categorias={categorias}/>);
  expect(wrapper).toMatchSnapshot();
});
