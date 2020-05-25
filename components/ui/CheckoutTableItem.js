import React from "react";

const CheckoutTableItem = () => {
  return (
    <>
      <tr>
        <td data-title="Product">
          <div className="cart-product-wrapper">
            <div className="cart-product-body">
              <h6>
                {" "}
                <a href="#">Pepperoni</a>{" "}
              </h6>
              <p>21 Inch</p>
              <p>Extra Cheese</p>
              <p>Extra Pepperoni</p>
              <p>Cheese Crust</p>
              <p>Added Bacon</p>
            </div>
          </div>
        </td>
        <td data-title="Quantity">x1</td>
        <td data-title="Total">
          {" "}
          <strong>23.99$</strong>{" "}
        </td>
      </tr>
    </>
  );
};

export default CheckoutTableItem;
