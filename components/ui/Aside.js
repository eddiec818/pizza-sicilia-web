import React from "react";

const Aside = () => {
  return (
    <>
      <aside className="main-aside">
        <a className="navbar-brand" href="index.html">
          {" "}
          <img src="https://via.placeholder.com/135x73" alt="logo" />{" "}
        </a>

        {/* <div className="aside-scroll"> */}
        <ul>
          <li className="menu-item">
            <a href="/">Home</a>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="/menu">Menú</a>
            <ul className="submenu">
              <li className="menu-item">
                {" "}
                <a href="/menu">Ir al Menú</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="#">Armar Pizza</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="/locations">Ubicaiones</a>
          </li>
          <li className="menu-item">
            <a href="/aboutus">Nosotros</a>
          </li>
        </ul>

        {/* </div> */}
      </aside>
      <div className="aside-overlay aside-trigger"></div>
    </>
  );
};

export default Aside;
