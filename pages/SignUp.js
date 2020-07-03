import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/layout/Layout";

import firebase from "../firebase";

// validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";
import Link from "next/link";

const STATE_INICIAL = {
  username: "",
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

const SingUp = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { username, email, password } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(username, email, password);

      Router.push("/");
    } catch (error) {
      console.error("Hubo un error al crear el usuario ", error.message);
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
        {/* <!-- Register Form Start --> */}
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
                  <h2>Hello World!</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="auth-form">
                <h2>Registro</h2>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-light"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-light"
                      placeholder="Correo Electronico"
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
                  {errores.username && (
                    <p style={errorStyle}>{errores.username}</p>
                  )}

                  {errores.email && <p style={errorStyle}>{errores.email}</p>}

                  {errores.password && (
                    <p style={errorStyle}>{errores.password}</p>
                  )}

                  {error && <p style={errorStyle}>{error} </p>}

                  <button type="submit" className="btn-custom primary">
                    registrarme
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
                    Ya tienes cuenta?{" "}
                    <Link href="/login">
                      <a>Inicia Sesión</a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Register Form End --> */}
      </Layout>
    </>
  );
};

export default SingUp;
