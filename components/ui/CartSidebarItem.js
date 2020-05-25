import React from "react";
import CartSideBar from "../layout/CartSideBar";
import { clearProduct, productQuantity } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const CartSidebarItem = ({ producto }) => {
  const { nombre, precio, cantidad, tamaño, ingredientes } = producto;

  const precioTotal = precio * cantidad;

  const dispatch = useDispatch();

  const clearCartProduct = (producto) => {
    cantidad > 1
      ? dispatch(productQuantity("decrease", producto))
      : dispatch(clearProduct(producto));
  };

  return (
    <>
      <div className="cart-sidebar-item">
        <div className="media">
          <a href="menu-item-v1.html">
            <img src="https://via.placeholder.com/300" alt="product" />
          </a>
          <div className="media-body">
            <h5>
              {" "}
              <a href="/menu" title={nombre}>
                {nombre}
              </a>{" "}
            </h5>
            <span>
              {cantidad}x{precio}$
            </span>
          </div>
        </div>
        <div className="cart-sidebar-item-meta">
          <span>{tamaño} Inches</span>
          <span>Extra Cheese</span>
          <span>Cheese Crust</span>
        </div>
        <div className="cart-sidebar-price">{precioTotal}$</div>
        <div
          onClick={() => clearCartProduct(producto)}
          className="close-btn btn"
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default CartSidebarItem;
