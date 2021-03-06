import * as actionType from "store/actionTypes";

export function fetchUserExperiences(userId) {
  return {
    type: actionType.FETCH_USER_EXPERIENCES_REQUEST,
    payload: {
      userId
    }
  };
}

export function fetchUserExperiencesSuccess(experiences) {
  return {
    type: actionType.FETCH_USER_EXPERIENCES_SUCCESS,
    payload: {
      experiences
    }
  };
}

export function fetchUserExperiencesFailure(message) {
  return {
    type: actionType.FETCH_USER_EXPERIENCES_SUCCESS,
    message
  };
}
