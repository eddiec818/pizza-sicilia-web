import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";
import CategoryMenuItem from "../components/ui/CategoryMenuItem";

import { useDispatch, useSelector } from "react-redux";
import CategorySlider from "../components/ui/CategorySlider";
import MobileCategorySlider from "../components/ui/MobileCategorySlider";

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [showFixed, setShowFixed] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  console.log(isTabletOrMobile);

  const refMenuCategory = useRef();
  const refMenuSection = useRef();

  const categorias = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.currentUser.selectedCategory
  );

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 400;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

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
          style={showFixed ? { zIndex: "996" } : {}}
          ref={refMenuCategory}
        >
          <div className="container">
            {isTabletOrMobile ? (
              <MobileCategorySlider
                showFixed={showFixed}
                refMenuCategory={refMenuCategory}
                refMenuSection={refMenuSection}
              />
            ) : (
              <CategorySlider
                showFixed={showFixed}
                refMenuCategory={refMenuCategory}
                refMenuSection={refMenuSection}
              />
            )}
          </div>
        </div>
        {/* <!-- Menu Categories End --> */}

        <div
          className="section section-padding"
          style={showFixed ? { paddingTop: "140px" } : {}}
          ref={refMenuSection}
        >
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
                }[category]
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Menu;
