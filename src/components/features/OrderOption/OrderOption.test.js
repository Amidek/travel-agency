import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {

  it('should render component', () => {
    const component = shallow(<OrderOption name='abc' type='cba' />);
    expect(component).render;
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render prop name as title', () => {
    const expectedName = 'lorem ipsum';
    const component = shallow(<OrderOption name={expectedName} type='number'/>);
    expect(component.find({name}).text()).toEqual(expectedName);
  });
});