/* SELECTORS */

export const getAllTags = ({tags}) => tags;
export const getTagByName = ({tags}, tagName) => tags[tagName];

/* ACTIONS */


// action name creator
const reducerName = 'tags';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TAGS_FILTER = createActionName('TAGE_FILTER');

// action creators
export const createAction_tagsFilter = payload => ({
  payload,
  type: TAGS_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TAGS_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

