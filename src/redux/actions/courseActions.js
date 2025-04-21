import * as types from "./actionTypes";

// all actions must have a type property
// action creators are functions that return an action object
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
