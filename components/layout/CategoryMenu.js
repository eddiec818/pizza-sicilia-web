import React from "react";
import CategoryMenuItem from "../ui/CategoryMenuItem";

import { useSelector, useDispatch } from "react-redux";

const CategoryMenu = ({ categoria }) => {
  const categoriaTitulo = categoria[0].toUpperCase() + categoria.slice(1);

  // const productos = useSelector((state) => state.products[categoria]);

  return (
    <>
      <a href="#" data-filter="*" className="ct-menu-category-item">
        <div className="menu-category-thumb">
          <img src="https://via.placeholder.com/400" alt="category" />
        </div>
        <div className="menu-category-desc">
          <h6>{categoriaTitulo}</h6>
        </div>
      </a>

      {/* <!-- Category Start --> */}
      {/* <div className="menu-category dark-overlay dark-overlay-2">
        {" "}
        {/* style="background-image: url('https://via.placeholder.com/1920x500')" 
        <h3>{categoriaTitulo}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="row">
        {productos.length === 0
          ? null
          : productos.map((producto) => (
              <CategoryMenuItem key={producto.id} producto={producto} />
            ))}
      </div> */}
      {/* <!-- Category End --> */}
    </>
  );
};

export default CategoryMenu;
