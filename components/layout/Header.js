import React from "react";
import Link from "next/link";
import TopHeader from "../ui/TopHeader";
import { useSelector } from "react-redux";

const Header = () => {
  const cartNumber = useSelector((state) => state.cart.cartNumber);

  return (
    <>
      <header className="main-header header-1 header-4 header-absolute">
        <TopHeader />

        <div className="container">
          <nav className="navbar">
            {/* <!-- Logo --> */}
            <a className="navbar-brand" href="index.html">
              {" "}
              <img src="assets/img/misc/1.png" alt="logo" />{" "}
            </a>
            {/* <!-- Menu --> */}
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
              {/* <!-- Toggler --> */}
              <div className="aside-toggler aside-trigger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
