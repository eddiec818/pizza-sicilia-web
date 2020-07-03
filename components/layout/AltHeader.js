import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { cartOpen } from "../../redux/actions/cartActions";

import { FirebaseContext } from "../../firebase";

const AltHeader = () => {
  const [currentPath, setCurrentPath] = useState("/menu");

  const { usuario, firebase } = useContext(FirebaseContext);

  const dispatch = useDispatch();
  const router = useRouter();

  const cartNumber = useSelector((state) => state.cart.cartNumber);
  const cartOpened = useSelector((state) => state.cart.cartOpen);

  const Logger = () =>
    usuario ? (
      <>
        <ul className="top-header-nav header-cta">
          <li>
            {" "}
            <a>{usuario.displayName}</a>{" "}
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <i
            style={{ color: "white" }}
            onClick={() => {
              router.reload();
              return firebase.cerrarSesion();
            }}
            className="fas fa-sign-out-alt btn"
          ></i>
        </div>
      </>
    ) : (
      <>
        <ul className="top-header-nav header-cta">
          <li>
            <Link href="/login">
              <a>Iniciar Sesión</a>
            </Link>
          </li>
        </ul>
      </>
    );

  return (
    <>
      <header className="main-header header-2">
        <div className="container">
          <nav className="navbar">
            {/* <!-- Toggler --> */}
            <div className="aside-toggler aside-trigger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- Logo --> */}
            {router.pathname !== "/" ? (
              <a
                className="navbar-brand"
                href="index.html"
                style={{ width: "100px" }}
              >
                {" "}
                <img
                  src="http://localhost:3000/assets/img/misc/1.png"
                  alt="logo"
                />{" "}
              </a>
            ) : (
              <ul className="top-header-nav header-wa">
                <li>
                  <a
                    className="nav-brand"
                    href="https://wa.me/50763412460?text=Quisiera%20hacer%20una%20orden"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>+507 63412460{" "}
                  </a>
                </li>
              </ul>
            )}

            {/* <!-- Menu --> */}
            <ul className="navbar-nav">
              {/* <li className="menu-item menu-item-has-children">
                    <a href="/">Home</a>
                     <Link href="/"><a>Home</a></Link> 
                  </li> */}
              <li className="menu-item menu-item-has-children">
                {/* <a href="/menu">Menu</a> */}
                <Link href="/">
                  <a>Menú</a>
                </Link>
              </li>
              <li className="menu-item">
                {/* <a href="/locations">Ubicaciones</a> */}
                <Link href="/locations">
                  <a>Ubicaciones</a>
                </Link>
              </li>
              <li className="menu-item">
                {/* <a href="/aboutus">Nosotros</a> */}
                <Link href="/aboutus">
                  <a>Nosotros</a>
                </Link>
              </li>
            </ul>
            {router.pathname !== "/" ? (
              <div className="header-controls">
                <ul className="header-controls-inner">
                  <li
                    className="cart-dropdown-wrapper cart-trigger "
                    onClick={() => dispatch(cartOpen(!cartOpened))}
                  >
                    <span className="cart-item-count">{cartNumber}</span>
                    <i
                      className="flaticon-shopping-bag"
                      style={{ color: "white", fontSize: "2rem" }}
                    ></i>
                  </li>
                </ul>
              </div>
            ) : (
              <Logger />
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default AltHeader;
