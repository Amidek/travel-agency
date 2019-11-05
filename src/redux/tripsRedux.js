/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    const days = new RegExp(filters.duration, 'i');
    output = output.filter(trip => days.test(trip.days));
  }
  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  // TODO - filter trips by tripId
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  trips.filter(trip => trip.country.code == countryCode);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */


// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types

export const TRIPS_FILTER = createActionName('TRIPS_FILTER');
// action creators

export const createAction_tripsFilter = payload => ({ 
  payload, 
  type: TRIPS_FILTER,
});
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TRIPS_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

