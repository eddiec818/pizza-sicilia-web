import {
  ADD_CART,
  GET_CART_NUMBER,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";
import { productos } from "../../public/statics/products";

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
