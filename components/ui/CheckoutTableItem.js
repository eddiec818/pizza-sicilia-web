import React from "react";

const CheckoutTableItem = ({ cartProduct }) => {
  const { nombre, tamaño, ingredientes, cantidad, precio } = cartProduct;

  const precioTotal = precio * cantidad;

  return (
    <>
      <tr>
        <td data-title="Product">
          <div className="cart-product-wrapper">
            <div className="cart-product-body">
              <h6>
                {" "}
                <a href="#">{nombre}</a>{" "}
              </h6>
              <p>{tamaño} Inch</p>
              {ingredientes.others.map((ingrediente, index) => (
                <p key={index}>{ingrediente}</p>
              ))}
            </div>
          </div>
        </td>
        <td data-title="Quantity">x{cantidad}</td>
        <td data-title="Total">
          {" "}
          <strong>{precioTotal}$</strong>{" "}
        </td>
      </tr>
    </>
  );
};

export default CheckoutTableItem;
