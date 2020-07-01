import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory } from "../../redux/actions/currentUserActions";
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

const CategorySlider = () => {
  const categorias = useSelector((state) => state.products);
  const selectedCategory = useSelector(
    (state) => state.currentUser.selectedCategory
  );

  const dispatch = useDispatch();

  return (
    <>
      <Slider {...settings}>
        <div
          data-filter="*"
          className={`ct-menu-category-item ${
            selectedCategory == "all" && "active"
          }`}
          onClick={() => dispatch(getSelectedCategory("all"))}
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
            onClick={() => dispatch(getSelectedCategory(categoria))}
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
    </>
  );
};

export default CategorySlider;
