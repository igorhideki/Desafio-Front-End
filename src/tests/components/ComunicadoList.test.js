import React from 'react';
import { shallow } from 'enzyme';
import ComunicadoList from '../../components/ComunicadoList';
import comunicados from '../fixtures/comunicados';

test('should render ComunicadosList correctly with provided data', () => {
  const wrapper = shallow(<ComunicadoList comunicados={comunicados}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ComunicadosList with empty data', () => {
  const wrapper = shallow(<ComunicadoList  comunicados={[]} />);
  expect(wrapper).toMatchSnapshot();
});
