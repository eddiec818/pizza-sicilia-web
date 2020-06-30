import { productos } from "../../public/statics/products";
import {
  ADD_CART,
  GET_CART_NUMBER,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_CART,
} from "../actions/types";
const initialState = {
  cartNumber: 0,
  cartCost: 0,
  products: [],
};

export default (state = initialState, action) => {
  let productSelected;
  switch (action.type) {
    case ADD_CART:
      productSelected = { ...action.payload };
      productSelected.cantidad += 1;
      productSelected.inCart = true;

      return {
        ...state,
        cartNumber: state.cartNumber + productSelected.cantidad,
        cartCost:
          Number(state.cartCost) +
          action.payload.precio * productSelected.cantidad,
        products: [...state.products, productSelected],
      };
    case GET_CART_NUMBER:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.cantidad += 1;
        }
        return product;
      });
      return {
        ...state,
        cartNumber: state.cartNumber + 1,
        cartCost: Number(state.cartCost) + action.payload.precio,
        products: state.products,
      };
    case DECREASE_QUANTITY:
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.cantidad -= 1;
        }
        return product;
      });
      return {
        ...state,
        cartNumber: state.cartNumber - 1,
        cartCost: (Number(state.cartCost) - action.payload.precio).toFixed(2),
        products: state.products,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        cartNumber: state.cartNumber - 1,
        cartCost: (Number(state.cartCost) - action.payload.precio).toFixed(2),
        products: state.products.filter(
          (producto) => producto.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};
