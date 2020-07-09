import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { openMobileAside } from "../../redux/actions/currentUserActions";
import { FirebaseContext } from "../../firebase";
import { useRouter } from "next/router";

const Aside = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(openMobileAside(false));
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  const openAside = useSelector((state) => state.currentUser.mobileAside);

  return (
    <>
      <aside className={`main-aside ${openAside ? "open" : ""}`}>
        <a
          className="navbar-brand"
          href="index.html"
          style={{ backgroundColor: "black" }}
        >
          <img src="http://localhost:3000/assets/img/misc/1.png" alt="logo" />
        </a>

        {usuario ? (
          <>
            <ul className="d-flex">
              <li className="menu-item">
                <a>{usuario.displayName}</a>
              </li>
              <li className="d-flex align-items-center menu-item">
                <i
                  style={{ color: "red" }}
                  onClick={() => {
                    router.reload();
                    return firebase.cerrarSesion();
                  }}
                  className="fas fa-sign-out-alt btn"
                ></i>
              </li>
            </ul>
          </>
        ) : (
          <ul className="d-flex">
            <li className="menu-item">
              <Link href="/login">
                <a>Iniciar Sesión</a>
              </Link>
            </li>
            <p className="menu-item" style={{ alignSelf: "center" }}>
              O
            </p>
            <li className="menu-item">
              <Link href="/signup">
                <a>Crear Cuenta</a>
              </Link>
            </li>
          </ul>
        )}

        {/* <div className="aside-scroll"> */}
        <ul>
          <li className="menu-item">
            <Link href="/">
              <a>Menú</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/locations">
              <a>Ubicaiones</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/aboutus">
              <a>Nosotros</a>
            </Link>
          </li>
        </ul>
        <ul style={{ paddingTop: "10px" }}>
          <li className="menu-item" style={{ fontSize: "0.7rem" }}>
            <Link href="#">
              <a style={{ padding: "0 15px" }}>Privacy Policy</a>
            </Link>
          </li>
          <li className="menu-item" style={{ fontSize: "0.7rem" }}>
            <Link href="#">
              <a style={{ padding: "0 15px" }}>Refund Policy</a>
            </Link>
          </li>
          <li className="menu-item" style={{ fontSize: "0.7rem" }}>
            <Link href="#">
              <a style={{ padding: "0 15px" }}>Cookie Policy</a>
            </Link>
          </li>
          <li className="menu-item" style={{ fontSize: "0.7rem" }}>
            <Link href="#">
              <a style={{ padding: "0 15px" }}>Terms & Conditions</a>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </aside>
      <div
        className="aside-overlay aside-trigger"
        onClick={() => dispatch(openMobileAside(!openAside))}
      ></div>
    </>
  );
};

export default Aside;
