/* SELECTORS */
import { parseOptionPrice } from '../../src/utils/parseOptionPrice';

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if (filters.duration) {
    output = output.filter(
      trip => filters.duration.from < trip.days && trip.days < filters.duration.to
    );
  }

  // TODO - filter by tags
  if(filters.tags) {
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }
  // TODO - sort by cost descending (most expensive goes first)
  output = output.map(trip => {
    trip.cost = parseOptionPrice(trip.cost).value;
    return trip;
  })
    .sort((tripA, tripB) => {
      return tripB.cost - tripA.cost;
    });

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);
  filtered[0].cost = parseOptionPrice(filtered[0].cost).value;
  // TODO - filter trips by tripId
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code === countryCode);

  // TODO - filter trips by countryCode
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

