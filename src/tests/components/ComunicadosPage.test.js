import React from 'react';
import { shallow } from 'enzyme';
import ComunicadosPage from '../../components/ComunicadosPage';

test('should render ComunicadosPage correctly', () => {
  const wrapper = shallow(<ComunicadosPage />);
  expect(wrapper).toMatchSnapshot();
});
