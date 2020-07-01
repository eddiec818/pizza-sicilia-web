import {
  ADD_CURRENT_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_CURRENT_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SELECT_CATEGORY,
} from "../actions/types";

const initialState = {
  info: {},
  error: null,
  loading: false,
  selectedCategory: "all",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
    case ADD_CURRENT_USER:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        info: action.payload,
        error: null,
        loading: false,
      };
    case ADD_USER_ERROR:
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        info: action.payload,
        error: null,
        loading: false,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};
