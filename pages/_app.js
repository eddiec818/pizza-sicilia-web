import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAutenticacion from "../hooks/useAutenticacion";

import "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

//Redux
import { Provider } from "react-redux";
import store from "../redux/store";

const MyApp = (props) => {
  const usuario = useAutenticacion();
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <FirebaseContext.Provider
        value={{
          firebase,
          usuario,
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </Provider>
  );
};

export default MyApp;
