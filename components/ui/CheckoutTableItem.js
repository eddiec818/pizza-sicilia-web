import React from "react";

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

  return (
    <>
      <tr>
        <td data-title="Product">
          <div className="cart-product-wrapper">
            <div className="cart-product-body">
              <h6>
                {" "}
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
