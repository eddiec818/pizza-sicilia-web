import {
  ADD_CART,
  GET_CART_NUMBER,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_CART,
} from "../actions/types";

export const addCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CART,
      payload: product,
    });
  };
};

export const productQuantity = (action, product) => {
  return (dispatch) => {
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: product,
    });
  };
};

export const clearProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: product,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};
