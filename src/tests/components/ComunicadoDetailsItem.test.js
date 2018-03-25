import React from 'react';
import { shallow } from 'enzyme';
import ComunicadoDetailsItem from '../../components/ComunicadoDetailsItem';
import comunicados from '../fixtures/comunicados';

test('should render ComunicadoDetailsItem', () => {
  const wrapper = shallow(<ComunicadoDetailsItem {...comunicados[2]} />);
  expect(wrapper).toMatchSnapshot();
});
