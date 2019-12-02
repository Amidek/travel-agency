// selectors
export const getOrder = ({order}) => order;
export const getOrderOptions = ({order}) => order.options;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_OPTION = createActionName('SET_OPTION');
export const ON_CLICK = createActionName('ON_CLICK');
export const ON_CHANGE = createActionName('ON_CHANGE');

// action creators
export const setOrderOption = payload => ({ payload, type: SET_OPTION });
export const onClick = payload => ({payload, type: ON_CLICK});
export const onChange = payload => ({payload, type: ON_CHANGE});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case ON_CLICK: 
      return {
        ...statePart,
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    case ON_CHANGE:
      return {
        ...statePart, 
        options: {
          ...statePart.options,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}
