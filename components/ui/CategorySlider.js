import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory } from "../../redux/actions/currentUserActions";
import { cartOpen } from "../../redux/actions/cartActions";
import Slider from "react-slick";

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
      breakpoint: 1200,
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

const CategorySlider = ({ showFixed, refMenuCategory, refMenuSection }) => {
  const [category, setCategory] = useState("all");

  const cartNumber = useSelector((state) => state.cart.cartNumber);
  const cartOpened = useSelector((state) => state.cart.cartOpen);
  const categorias = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.currentUser.selectedCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    showFixed
      ? refMenuSection.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      : refMenuCategory.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
    dispatch(getSelectedCategory(category));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a
          className="navbar-brand"
          href="index.html"
          style={showFixed ? { width: "100px" } : { width: "140px" }}
        >
          {" "}
          <img src="assets/img/misc/1.png" alt="logo" />{" "}
        </a>
        <Slider {...settings}>
          <div
            className={`ct-menu-category-item ${
              category === "all" && "active"
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            {!showFixed ? (
              <div className="menu-category-thumb">
                <img src="https://via.placeholder.com/400" alt="category" />
              </div>
            ) : (
              <i
                className="flaticon-shopping-bag"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>
            )}
            <div className="menu-category-desc">
              <h6>All</h6>
            </div>
          </div>
          {Object.keys(categorias).map((categoria, index) => (
            <div
              key={index}
              className={`ct-menu-category-item ${
                category === categoria && "active"
              }`}
              onClick={() => handleCategoryClick(categoria)}
            >
              {!showFixed ? (
                <div className="menu-category-thumb">
                  <img src="https://via.placeholder.com/400" alt="category" />
                </div>
              ) : (
                <i
                  className="flaticon-shopping-bag"
                  style={{ color: "white", fontSize: "1.5rem" }}
                ></i>
              )}
              <div className="menu-category-desc">
                <h6>{categoria}</h6>
              </div>
            </div>
          ))}
        </Slider>
        <div className="header-controls">
          <ul className="header-controls-inner">
            <li
              className="cart-dropdown-wrapper cart-trigger "
              onClick={() => dispatch(cartOpen(!cartOpened))}
            >
              <span className="cart-item-count">{cartNumber}</span>
              <i
                className="flaticon-shopping-bag"
                style={{ color: "white", fontSize: "2.5rem" }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
