import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory } from "../../redux/actions/currentUserActions";
import { cartOpen } from "../../redux/actions/cartActions";
import { openMobileAside } from "../../redux/actions/currentUserActions";
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

const MobileCategorySlider = ({
  showFixed,
  refMenuCategory,
  refMenuSection,
}) => {
  const [category, setCategory] = useState("all");

  const cartNumber = useSelector((state) => state.cart.cartNumber);
  const cartOpened = useSelector((state) => state.cart.cartOpen);
  const openAside = useSelector((state) => state.currentUser.mobileAside);
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
        {showFixed && (
          <div
            className="aside-toggler aside-trigger"
            onClick={() => dispatch(openMobileAside(!openAside))}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <Slider {...settings}>
          <div
            className={`ct-menu-category-item ${
              category === "all" && "active"
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            <div className="menu-category-thumb">
              <img src="https://via.placeholder.com/400" alt="category" />
            </div>
            <i
              className="flaticon-shopping-bag"
              style={{ color: "white", fontSize: "2rem" }}
            ></i>
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
              <div className="menu-category-thumb">
                <img src="https://via.placeholder.com/400" alt="category" />
              </div>
              <i
                className="flaticon-shopping-bag"
                style={{ color: "white", fontSize: "2rem" }}
              ></i>

              <div className="menu-category-desc">
                <h6>{categoria}</h6>
              </div>
            </div>
          ))}
        </Slider>
        {showFixed && (
          <div className="header-controls">
            <ul className="header-controls-inner">
              <li
                className="cart-dropdown-wrapper cart-trigger "
                onClick={() => dispatch(cartOpen(!cartOpened))}
              >
                <span className="cart-item-count">{cartNumber}</span>
                <i
                  className="flaticon-shopping-bag"
                  style={{ color: "white", fontSize: "2rem" }}
                ></i>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileCategorySlider;
