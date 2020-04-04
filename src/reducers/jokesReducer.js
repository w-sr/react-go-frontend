import * as types from '../constants/actionTypes';

export default function (state = { jokes: [], pending: false }, action) {

  switch (action.type) {
    case types.FETCH_JOKES:
      return { ...state, pending: true };
    case types.FETCH_JOKES_SUCCESS:
      return { ...state, jokes: action.jokes, pending: false };
    case types.FETCH_JOKES_FAILURE:
      return { ...state, error: action.error, pending: false };

    case types.CREATE_JOKES:
      return { ...state, pending: true };
    case types.CREATE_JOKES_SUCCESS:
      return { ...state, jokes: action.jokes, pending: false };
    case types.CREATE_JOKES_FAILURE:
      return { ...state, error: action.error, pending: false };

    case types.DELETE_JOKES:
      return { ...state, pending: true };
    case types.DELETE_JOKES_SUCCESS:
      return { ...state, jokes: action.jokes, pending: false };
    case types.DELETE_JOKES_FAILURE:
      return { ...state, error: action.error, pending: false };

    default:
      return state;
  }
}
