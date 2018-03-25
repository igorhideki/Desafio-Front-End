import React from 'react';
import { mount } from 'enzyme';
import ComunicadoDetailsPage from '../../components/ComunicadoDetailsPage';
import comunicados from '../fixtures/comunicados';

test('should render ComunicadoDetailsPage correctly', () => {
  const comunicado = comunicados[1];
  const match = { params: { id: comunicado.id.toString() } };
  const wrapper = mount(<ComunicadoDetailsPage match={match} />);
  wrapper.setState(() => ({ isLoading: false, comunicado }));
  expect(wrapper).toMatchSnapshot();
});
