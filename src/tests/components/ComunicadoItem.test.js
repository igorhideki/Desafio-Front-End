import React from 'react';
import { shallow } from 'enzyme';
import ComunicadoItem from '../../components/ComunicadoItem';
import comunicados from '../fixtures/comunicados';

let wrapper, history;

beforeAll(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<ComunicadoItem.WrappedComponent key={comunicados[1].id} {...comunicados[1]} history={history}/>);
});

test('should render ComunicadoItem correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle clicked in comunicadoItem', () => {
  const value = `details/${comunicados[1].id}`;
  wrapper.find('li').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith(value);
});
