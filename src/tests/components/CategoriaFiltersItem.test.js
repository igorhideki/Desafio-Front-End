import React from 'react';
import { shallow } from 'enzyme';
import CategoriaFiltersItem from '../../components/CategoriaFiltersItem';
import categorias from '../fixtures/categorias';

test('should render CategoriaFiltersItem correctly', () => {
  const wrapper = shallow(<CategoriaFiltersItem{...categorias[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

