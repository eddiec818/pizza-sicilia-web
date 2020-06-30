import React from "react";
import CartSideBar from "../layout/CartSideBar";
import { clearProduct, productQuantity } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const CartSidebarItem = ({ producto }) => {
  const {
    id,
    nombre,
    categoria,
    precio,
    cantidad,
    tamaño,
    ingredientes,
  } = producto;

  const precioTotal = precio * cantidad;

  const dispatch = useDispatch();

  const clearCartProduct = (producto) => {
    cantidad > 1
      ? dispatch(productQuantity("decrease", producto))
      : dispatch(clearProduct(producto));
  };

  const salsaDeTomate = () => {
    if (ingredientes.salsa == 0) {
      return "Poca salsa de Tomate";
    } else if (ingredientes.salsa == 2) {
      return "Salsa de Tomate Extra";
    } else {
      return "Salsa de Tomate";
    }
  };
  const queso = () => {
    if (ingredientes.queso == 0) {
      return "Poco Queso Mozarella";
    } else if (ingredientes.queso == 2) {
      return "Queso Mozarella Extra";
    } else {
      return "Queso Mozarella";
    }
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
              <a href={`/${categoria}/${id}`} title={nombre}>
                {`${
                  categoria[0].toUpperCase() + categoria.slice(1)
                } de ${nombre}`}
              </a>{" "}
            </h5>
            <p style={{ fontSize: "0.7rem" }}>
              {salsaDeTomate()}, {queso()}, {ingredientes.others.join(", ")}.
            </p>
          </div>
        </div>
        {/* <div className="cart-sidebar-item-meta">
          {categoria == "pizza" ? (
            <span>{tamaño} Pulgadas</span>
          ) : (
            tamaño && <span>{tamaño}</span>
          )}
          {categoria == "pizza" && ingredientes.salsa == 1 && (
            <span>Extra Salsa</span>
          )}
          {categoria == "pizza" && ingredientes.queso == 1 && (
            <span>Extra Queso</span>
          )}
        </div> */}
        <div className="cart-sidebar-price">
          <span
            className="d-block text-center"
            style={{ fontSize: "0.7rem", fontWeight: "550" }}
          >
            {cantidad} x {precio.toFixed(2)}$
          </span>
          <span className="d-block text-center" style={{ fontSize: "1.2rem" }}>
            {precioTotal.toFixed(2)}$
          </span>
        </div>
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
