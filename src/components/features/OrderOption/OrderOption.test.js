import { shallow } from 'enzyme';
import React from 'react';
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
    const component = shallow(<OrderOption name={expectedName} type='text'/>);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };
  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };

  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };

  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {
      /* test setup */
      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption; /* 1 */

      beforeEach(() => {
        mockSetOrderOption = jest.fn(); /* 2 */
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption} /* 3 */
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });
      /* common tests */
      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown':
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);

            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);

            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent
              .find('select')
              .simulate('change', { currentTarget: { value: testValue } });
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({
              [mockProps.id]: testValue,
            });
          });
          break;


        case 'icons':
          it('should simulate click on last div with class Icon', () => {
            renderedSubcomponent.find('.icon div').at(1).simulate('click', {currentTarget: {value: testValue}});
          });

          it('should render div with class icon', () => {
            expect(renderedSubcomponent.prop('className')).toEqual('icon');
          });
          break;


        case 'checkboxes':
          it('should render inputs with type checkbox', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.at(0).prop('type')).toBe('checkbox');
          });
  
          it('should run setOrderOption function on change', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.at(1).prop('value')).toBe(testValue);
            input.at(1)
              .simulate('change', { currentTarget: { checked: true } });
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({
              [mockProps.id]: [mockProps.currentValue, testValue],
            });
          });
          break;


        case 'number':
          it('contains input and limits', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.length).toBe(1);

            const min = mockProps.limits.min;
            const max = mockProps.limits.max;
            expect(input.prop('value')).toBe(mockPropsForType.number.currentValue);
            expect(min).toBe(mockProps.limits.min);
            expect(max).toBe(mockProps.limits.max);

          });

          it('should render div with class: number and input with type: number', () => {
            expect(renderedSubcomponent.prop('className')).toEqual('number');
            expect(renderedSubcomponent.find('input').prop('type')).toEqual('number');
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
          });
          break;


        case 'text':
          it('contains select and options', () => {
            const input = renderedSubcomponent.find('input');
            expect(input.length).toBe(1);
          });

          it('should render input with type: text and div with class: text', () => {
            expect(renderedSubcomponent.prop('className')).toEqual('text');
            expect(renderedSubcomponent.find('input').prop('type')).toEqual('text');
          });
          break;


        case 'date':
          it('should simulate change', () => {
            renderedSubcomponent.find('.datepicker').simulate('change', testValue);
          });
          break;
      }
    });
  }

});