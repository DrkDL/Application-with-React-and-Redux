import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //state.push(action.course); // don't do this, as it mutates the state directly
      return [...state, { ...action.course }]; // use spread operator to create a new array with the new course added
    default:
      return state; // return the current state if no action is matched
  }
}
