import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";
import CategoryMenu from "../components/layout/CategoryMenu";
import CategoryMenuItem from "../components/ui/CategoryMenuItem";

import Slider from "react-slick";

import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 760,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 540,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categorias = useSelector((state) => state.products);

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Menú" />
        {/* <!-- Subheader End --> */}

        {/* <!-- Menu Categories Start --> */}
        <div className="ct-menu-categories menu-filter">
          <div className="container">
            <Slider {...settings}>
              <div
                data-filter="*"
                className={`ct-menu-category-item ${
                  selectedCategory == "all" && "active"
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                <div className="menu-category-thumb">
                  <img src="https://via.placeholder.com/400" alt="category" />
                </div>
                <div className="menu-category-desc">
                  <h6>All</h6>
                </div>
              </div>
              {Object.keys(categorias).map((categoria, index) => (
                <div
                  key={index}
                  data-filter="*"
                  className={`ct-menu-category-item ${
                    selectedCategory == categoria && "active"
                  }`}
                  onClick={() => setSelectedCategory(categoria)}
                >
                  <div className="menu-category-thumb">
                    <img src="https://via.placeholder.com/400" alt="category" />
                  </div>
                  <div className="menu-category-desc">
                    <h6>{categoria}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* <!-- Menu Categories End --> */}

        <div className="section section-padding">
          <div className="container">
            <div className="row">
              {
                {
                  all: Object.keys(categorias).map((categoria) =>
                    categorias[categoria].map((producto) => (
                      <CategoryMenuItem key={producto.id} producto={producto} />
                    ))
                  ),
                  pizzas: categorias["pizzas"].map((producto) => (
                    <CategoryMenuItem key={producto.id} producto={producto} />
                  )),
                  calzones: categorias["calzones"].map((producto) => (
                    <CategoryMenuItem key={producto.id} producto={producto} />
                  )),
                  papizzas: categorias["papizzas"].map((producto) => (
                    <CategoryMenuItem key={producto.id} producto={producto} />
                  )),
                  lasagnas: categorias["lasagnas"].map((producto) => (
                    <CategoryMenuItem key={producto.id} producto={producto} />
                  )),
                  alitas: categorias["alitas"].map((producto) => (
                    <CategoryMenuItem key={producto.id} producto={producto} />
                  )),
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
