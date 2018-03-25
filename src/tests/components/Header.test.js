import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Header />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should open menu correctly', () => {
  wrapper.find('#menu-toggler').simulate('click');
  expect(wrapper.state('isOpen')).toBe(true);
});

test('should close menu correctly when clicked in overlay', () => {
  wrapper.setState(() => ({ isOpen: true }));
  wrapper.find('#overlay').simulate('click');
  expect(wrapper.state('isOpen')).toBe(false);
});

