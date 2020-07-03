import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";
import CategoryMenuItem from "../components/ui/CategoryMenuItem";

import { useDispatch, useSelector } from "react-redux";
import CategorySlider from "../components/ui/CategorySlider";

const Menu = () => {
  // const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFixed, setShowFixed] = useState(false);

  const refMenuCategory = useRef();

  const categorias = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.currentUser.selectedCategory
  );

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 500;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const categoryMenuItem = (categoria) =>
    categorias[categoria].map(
      (producto) =>
        producto.disponibilidad && (
          <CategoryMenuItem key={producto.id} producto={producto} />
        )
    );

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        {/* <!-- Banner Start --> */}
        <div className="banner banner-1 banner-4 light-banner">
          <div className="banner-item">
            <div
              className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2"
              style={{
                backgroundImage: "url(assets/img/bg/fondo-prueba.jpg)",
              }}
            >
              {" "}
              <div className="container">
                {/* <img src="assets/img/misc/1.png" alt="img" /> */}
                <h1 className="title">
                  Modernizing The Traditional Italian Pizza
                </h1>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        {/* <!-- Subheader End --> */}

        {/* <!-- Menu Categories Start --> */}
        <div
          className={`${
            showFixed ? "fixed-top" : ""
          } ct-menu-categories menu-filter`}
          ref={refMenuCategory}
        >
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <CategorySlider
              showFixed={showFixed}
              refMenuCategory={refMenuCategory}
            />
          </div>
        </div>
        {/* <!-- Menu Categories End --> */}

        <div className="section section-padding">
          <div className="container">
            <div className="row">
              {
                {
                  all: Object.keys(categorias).map((categoria) =>
                    categoryMenuItem(categoria)
                  ),
                  pizzas: categoryMenuItem("pizzas"),
                  calzones: categoryMenuItem("calzones"),
                  papizzas: categoryMenuItem("papizzas"),
                  lasagnas: categoryMenuItem("lasagnas"),
                  alitas: categoryMenuItem("alitas"),
                  bebidas: categoryMenuItem("bebidas"),
                }[selectedCategory]
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
