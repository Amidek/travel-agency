import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should generate corrent adres', () => {
    const component = shallow(<TripSummary id='abc' />);
    const expectedLink = '/trip/abc';
    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image classes', () => {
    const expectedSrc = 'test src';
    const expectedAlt = ' test alt';
    const component = shallow(<TripSummary id='abc' image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props', () => {
    const expectedName = 'lorem ipsum';
    const expectedCost = 100;
    const expectedDays = 10;
    const component = shallow(<TripSummary
      id='abc' name={expectedName} cost={expectedCost} days={expectedDays}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.cost').text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.days').text()).toEqual(`${expectedDays} days`);
  });

  it('shows error without props', () => {
    const tags = [1, 2, 3];
    const component = shallow(<TripSummary tags={tags}/>);
    expect(component.toThrow);
  });

  it('should render spans in right order', () => {
    const tags = ['one', 'two', 'three'];
    const wrapper = shallow(<TripSummary tags={tags} />);
    expect(wrapper.find('span').at(0).props().tags).to.equal(tags[0]);
  });

  it('should not render div with class tags', () => {
    const tags = [];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('div').prop()).toEqual('tags');
  });
});