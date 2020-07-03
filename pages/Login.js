import React, { useState, useContext, useEffect } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";
import Link from "next/link";

import { useDispatch } from "react-redux";
import {
  getCurrentUser,
  addUserSuccess,
} from "../redux/actions/currentUserActions";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const errorStyle = {
  backgroundColor: "#ff2020",
  borderRadius: "3px",
  // fontWeight: '700',
  fontSize: "0.4 rem",
  color: "#FFF",
  textAlign: "center",
  // textTransform: 'uppercase',
  margin: "1rem 0",
};

const Login = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  const [error, guardarError] = useState(false);

  const dispatch = useDispatch();

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  useEffect(() => {
    if (usuario) {
      Router.push("/");
    }
  }, [usuario]);

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.back();
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario ", error.message);
      guardarError(error.message);
    }
  }

  const socialLogin = async (red) => {
    try {
      const provider =
        red === 1 ? firebase.googleProvider : firebase.facebookProvider;
      await firebase.auth.signInWithPopup(provider);
      Router.back();
    } catch (error) {
      guardarError(error.message);
    }
  };

  return (
    <>
      <Layout>
        {/* <!-- Login Form Start --> */}
        <div className="section">
          <div className="imgs-wrapper">
            <img
              src="assets/img/bg/hoja-login.png"
              alt="veg"
              className="d-none d-lg-block"
            />
            <img
              src="assets/img/bg/pizza-ezquina.png"
              alt="veg"
              className="d-none d-lg-block"
            />
          </div>

          <div className="container">
            <div className="auth-wrapper">
              <div
                className="auth-description bg-cover bg-center dark-overlay dark-overlay-2"
                style={{
                  backgroundImage: "url(assets/img/bg/pizza-login.jpg)",
                }}
              >
                <div className="auth-description-inner">
                  <i className="flaticon-chili"></i>
                  <h2>Welcome Back!</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="auth-form">
                <h2>Iniciar Sesion</h2>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-light"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-light"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  {errores.email && <p style={errorStyle}>{errores.email}</p>}

                  {errores.password && (
                    <p style={errorStyle}>{errores.password}</p>
                  )}

                  {error && <p style={errorStyle}>{error} </p>}

                  <a href="#">Olvidaste tu Contraseña?</a>
                  <button type="submit" className="btn-custom primary">
                    Iniciar Sesion
                  </button>

                  <div className="auth-seperator">
                    <span>O</span>
                  </div>

                  <div className="social-login">
                    <button
                      type="button"
                      className="ct-social-login facebook"
                      onClick={() => socialLogin(0)}
                    >
                      <i className="fab fa-facebook-f"></i> Conectate con
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="ct-social-login google"
                      onClick={() => socialLogin(1)}
                    >
                      <i className="fab fa-google"></i> Conectate con Google
                    </button>
                  </div>

                  <p>
                    No tienes cuenta?{" "}
                    <Link href="/signup">
                      <a>Crea una.</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Login Form End --> */}
      </Layout>
    </>
  );
};

export default Login;
