import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate corrent adres', () => {
    const component = shallow(<TripSummary id='abc' />);
    const expectLink = '/trip/abc';
    expect(component.find('Link')).toEqual(expectLink);
    console.log(component.debug());
  });
  it('should render correct image classes', () => {
    const expectedSrc = 'test src';
    const expectedAlt = ' test alt';
    const component = shallow(<TripSummary src={expectedSrc} ale={expectedAlt} />);
    expect(component.find('.image').prop('src alt')).toEqual(expectedSrc, expectedAlt);
  });
  it('should render correct props', () => {
    const expectedName = 'lorem ipsum';
    const expectedCost = '100';
    const expectedDays = '10';
    const component = shallow(<TripSummary 
      name={expectedName} cost={expectedCost} days={expectedDays}/>);
    const renderedName = component.find('.title').text();
    const renderedCost = component.find('.cost').text();
    const renderedDays = component.finc('.days').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toEqual(expectedCost);
    expect(renderedDays).toEqual(expectedDays);

  });
});