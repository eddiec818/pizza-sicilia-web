import React, { useContext } from "react";
import Link from "next/link";
import { FirebaseContext } from "../../firebase";

const TopHeader = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <div className="top-header-contacts">
              <ul className="top-header-nav">
                <li>
                  {" "}
                  <a className="p-0" href="tel:+123456789">
                    <i className="fab fa-whatsapp mr-2"></i>+507 63412460
                  </a>{" "}
                </li>
              </ul>
            </div>

            {usuario ? (
              <>
                <ul className="top-header-nav header-cta">
                  <li>
                    {" "}
                    <a>{usuario.displayName}</a>{" "}
                  </li>
                  <li className="d-flex align-items-center">
                    <i
                      onClick={() => firebase.cerrarSesion()}
                      className="fas fa-sign-out-alt btn"
                    ></i>
                  </li>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
