import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(thunk),

    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.subscribe(throttle(() => {
  saveState({
    currentUser: store.getState().currentUser,
  products: store.getState().products,
  cart: store.getState().cart,
  });
},1000));

export default store;
