import {
  ADD_CURRENT_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_CURRENT_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SELECT_CATEGORY,
  OPEN_MOBILE_ASIDE,
} from "../actions/types";

export const addCurrentUser = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_CURRENT_USER,
      payload: true,
    });
  };
};

// si el producto se guarda en la base de datos
export const addUserSuccess = (userInfo) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: userInfo,
    });
  };
};

// si hubo un error
export const addUserError = (estado) => {
  return (dispatch) => {
    dispatch({
      type: ADD_USER_ERROR,
      payload: estado,
    });
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT_USER,
      payload: true,
    });
  };
};

// si el producto se guarda en la base de datos
export const getUserSuccess = (usuario) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_SUCCESS,
      payload: usuario,
    });
  };
};

// si hubo un error
export const getUserError = (estado) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_ERROR,
      payload: estado,
    });
  };
};

export const getSelectedCategory = (estado) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_CATEGORY,
      payload: estado,
    });
  };
};

export const openMobileAside = (estado) => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MOBILE_ASIDE,
      payload: estado,
    });
  };
};
