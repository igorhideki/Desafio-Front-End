import React from 'react';
import { shallow } from 'enzyme';
import ComunicadoItemFile from '../../components/ComunicadoItemFile';
import comunicados from '../fixtures/comunicados';

test('should render ComunicadoItemFile correctly', () => {
  const wrapper = shallow(<ComunicadoItemFile key={comunicados[2].files[0].name} {...comunicados[2].files[0]} />);
  expect(wrapper).toMatchSnapshot();
});
