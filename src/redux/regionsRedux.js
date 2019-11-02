/* SELECTORS */

export const getAllRegions = ({regions}) => regions;
export const getRegion = ({regions}, regionCode) => regions[regionCode];

/* ACTIONS */


// action name creator
const reducerName = 'regions';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const REGION_FILTER = createActionName('REGION_FILTER');

// action creators
export const createAction_regionFilter = payload => ({
  payload, 
  type: REGION_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case REGION_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

