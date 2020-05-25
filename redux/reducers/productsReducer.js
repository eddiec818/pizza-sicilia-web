import { productos } from "../../public/statics/products";
import { GET_PRODUCTS } from "../actions/types";

const initialState = {
  pizzas: productos.pizzas,
  calzones: productos.calzones,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
