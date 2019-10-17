import {
  FETCH_ACTIVITIES,
  ASCENDING_ACTIVITIES,
  DESCENDING_ACTIVITIES
} from "../actions/index";

const initialState = {
  activitylist: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITIES:
      return {
        ...state,
        activitylist: action.payload
      };
    case ASCENDING_ACTIVITIES:
      return {
        ...state,
        activitylist: [...state.activitylist.sort((a, b) => b.date - a.date)]
      };
    case DESCENDING_ACTIVITIES:
      return {
        ...state,
        activitylist: [...state.activitylist.sort((a, b) => a.date - b.date)]
      };
    default:
      return state;
  }
}
