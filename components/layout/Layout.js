import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import CartSideBar from "./CartSideBar";
import Search from "../ui/Search";
import Aside from "../ui/Aside";

const Layout = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", setLoaded(true));

    return () => window.removeEventListener("load", setLoaded(false));
  }),
    [loaded];

  return (
    <>
      <Head>
        {/* <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}

        <title>Slices - Pizzeria HTML Template</title>

        {/* <!-- Vendor Stylesheets --> */}
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-theme.css" />
        {/* <!-- Icon Fonts --> */}
        <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
        <link
          rel="stylesheet"
          href="/assets/fonts/font-awesome/css/all.min.css"
        />

        {/* <!-- Page Specific Styles --> */}
        <link rel="stylesheet" href="/assets/css/plugins/leaflet.css" />

        {/* <!-- Slices Style sheet --> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        {/* <!-- Favicon --> */}
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.ico" />
      </Head>

      {/* <!-- Preloader --> */}
      {loaded && (
        <div className="ct-preloader">
          <div className="c9+t-preloader-inner">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      <CartSideBar />

      <Search />

      <Aside />

      <Header />

      <main>{props.children}</main>

      <Footer />

      {/* <!-- Vendor Scripts --> */}
      <script src="/assets/js/plugins/jquery-3.4.1.min.js"></script>
      <script src="/assets/js/plugins/popper.min.js"></script>
      <script src="/assets/js/plugins/waypoint.js"></script>
      <script src="/assets/js/plugins/bootstrap.min.js"></script>
      <script src="/assets/js/plugins/jquery.magnific-popup.min.js"></script>
      <script src="/assets/js/plugins/jquery.slimScroll.min.js"></script>
      <script src="/assets/js/plugins/imagesloaded.min.js"></script>
      <script src="/assets/js/plugins/jquery.steps.min.js"></script>
      <script src="/assets/js/plugins/jquery.countdown.min.js"></script>
      <script src="/assets/js/plugins/isotope.pkgd.min.js"></script>
      <script src="/assets/js/plugins/slick.min.js"></script>

      {/* <!-- Slices Scripts --> */}
      <script src="/assets/js/main.js"></script>

      {/* <!-- Page Specific Scripts --> */}
      <script src="/assets/js/plugins/leaflet.js"></script>
      <script src="/assets/js/map.js"></script>
    </>
  );
};

export default Layout;
