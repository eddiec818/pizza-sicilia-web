import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import currentUserReducer from "./currentUserReducer";

export default combineReducers({
  currentUser: currentUserReducer,
  products: productsReducer,
  cart: cartReducer,
});
