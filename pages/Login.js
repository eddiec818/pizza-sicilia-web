import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";

import firebase from "../firebase";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

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
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.back();
    } catch (error) {
      console.error("Hubo un error al autenticar el usuario ", error.message);
      guardarError(error.message);
    }
  }

  return (
    <>
      <Layout>
        {/* <!-- Login Form Start --> */}
        <div className="section login-signup-section">
          <div className="imgs-wrapper">
            <img
              src="https://via.placeholder.com/638x800"
              alt="veg"
              className="d-none d-lg-block"
            />
            <img
              src="https://via.placeholder.com/600"
              alt="veg"
              className="d-none d-lg-block"
            />
          </div>

          <div className="container">
            <div className="auth-wrapper">
              <div className="auth-description bg-cover bg-center dark-overlay dark-overlay-2">
                {" "}
                {/* style="background-image: url('https://via.placeholder.com/1280x1560')" */}
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
                <h2>Log in</h2>

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

                  <a href="#">Forgot Password?</a>
                  <button type="submit" className="btn-custom primary">
                    Login
                  </button>

                  <div className="auth-seperator">
                    <span>OR</span>
                  </div>

                  <div className="social-login">
                    <button type="button" className="ct-social-login facebook">
                      <i className="fab fa-facebook-f"></i> Continue with
                      Facebook{" "}
                    </button>
                    <button type="button" className="ct-social-login google">
                      <i className="fab fa-google"></i> Continue with Google
                    </button>
                  </div>

                  <p>
                    No tienes cuenta? <a href="/signup">Crea una.</a>{" "}
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
