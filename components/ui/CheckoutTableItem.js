import React from "react";

import { clearProduct, productQuantity } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const CheckoutTableItem = ({ cartProduct }) => {
  const {
    id,
    nombre,
    categoria,
    tamaño,
    ingredientes,
    cantidad,
    precio,
  } = cartProduct;

  const precioTotal = precio * cantidad;

  const dispatch = useDispatch();

  const clearCartProduct = (producto) => {
    cantidad > 1
      ? dispatch(productQuantity("decrease", producto))
      : dispatch(clearProduct(producto));
  };

  return (
    <>
      <tr>
        <td data-title="Product">
          <div className="cart-product-wrapper">
            <div className="cart-product-body">
              <h6 className="d-flex">
                <div
                  onClick={() => clearCartProduct(cartProduct)}
                  className="close-btn close-dark"
                >
                  <span></span>
                  <span></span>
                </div>
                <a href={`/${categoria}/${id}`}>{`${
                  categoria[0].toUpperCase() + categoria.slice(1)
                } de ${nombre}`}</a>{" "}
              </h6>
              {/* <p>{tamaño} Inch</p>
              {ingredientes.others.map((ingrediente, index) => (
                <p key={index}>{ingrediente}</p>
              ))} */}
              <p>
                Salsa de Tomate, Queso Mozarella,{" "}
                {ingredientes.others.join(", ")}
              </p>
            </div>
          </div>
        </td>
        <td className="text-center" data-title="Quantity">
          <strong>{cantidad}</strong>
          <strong style={{ fontSize: "0.6rem" }}>
            {` x ${precio.toFixed(2)}$`}
          </strong>
        </td>
        <td className="text-center" data-title="Total">
          {" "}
          <strong>{precioTotal.toFixed(2)}$</strong>{" "}
        </td>
      </tr>
    </>
  );
};

export default CheckoutTableItem;
