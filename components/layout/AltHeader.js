import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import TopHeader from "../ui/TopHeader";
import { useSelector } from "react-redux";
import CategorySlider from "../ui/CategorySlider";
import { FirebaseContext } from "../../firebase";

const AltHeader = () => {
  const [showFixed, setShowFixed] = useState(false);

  const { usuario, firebase } = useContext(FirebaseContext);

  const router = useRouter();

  const cartNumber = useSelector((state) => state.cart.cartNumber);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 500;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <header
        className={`${showFixed ? "can-sticky" : ""} main-header header-2`}
      >
        <div className="container">
          <nav className="navbar">
            {/* <!-- Toggler --> */}
            <div className="aside-toggler aside-trigger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- Logo --> */}
            <a className="navbar-brand" href="index.html">
              {" "}
              <img src="assets/img/misc/1.png" alt="logo" />{" "}
            </a>
            {/* <!-- Menu --> */}
            {showFixed ? (
              <CategorySlider />
            ) : (
              <ul className="navbar-nav">
                <li className="menu-item menu-item-has-children">
                  <a href="/">Home</a>
                  {/* <Link href="/"><a>Home</a></Link> */}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="/menu">Menu</a>
                  {/* <Link href="/menu"><a>Menú</a></Link> */}
                </li>
                <li className="menu-item">
                  <a href="/locations">Ubicaciones</a>
                  {/* <Link href="/locations"><a>Ubicaciones</a></Link> */}
                </li>
                <li className="menu-item">
                  <a href="/aboutus">Nosotros</a>
                  {/* <Link href="/aboutus"><a>Nosotros</a></Link> */}
                </li>
              </ul>
            )}

            {usuario ? (
              <>
                <ul className="top-header-nav header-cta">
                  <li>
                    {" "}
                    <a>{usuario.displayName}</a>{" "}
                  </li>
                  {!showFixed && (
                    <li className="d-flex align-items-center">
                      <i
                        onClick={() => {
                          router.reload();
                          return firebase.cerrarSesion();
                        }}
                        className="fas fa-sign-out-alt btn"
                      ></i>
                    </li>
                  )}
                </ul>
              </>
            ) : (
              <>
                <ul className="top-header-nav header-cta">
                  <li>
                    {" "}
                    <a href="/login">Iniciar Sesión</a>{" "}
                  </li>
                </ul>
              </>
            )}

            <div className="header-controls">
              <ul className="header-controls-inner">
                <li className="cart-dropdown-wrapper cart-trigger">
                  <span className="cart-item-count">{cartNumber}</span>
                  <i className="flaticon-shopping-bag"></i>
                </li>
                {/* <li className="search-dropdown-wrapper search-trigger">
                  <i className="flaticon-search"></i>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default AltHeader;
