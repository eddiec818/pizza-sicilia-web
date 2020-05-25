import React from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";

const Cart = () => {
  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Carrito" />
        {/* <!-- Subheader End --> */}

        {/* <!--Cart Start --> */}
        <section className="section">
          <div className="container">
            {/* <!-- Cart Table Start --> */}
            <table className="ct-responsive-table">
              <thead>
                <tr>
                  <th className="remove-item"></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qunantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="remove">
                    <button
                      type="button"
                      className="close-btn close-danger remove-from-cart"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </td>
                  <td data-title="Product">
                    <div className="cart-product-wrapper">
                      <img src="https://via.placeholder.com/300" alt="prod1" />
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
                  <td data-title="Price">
                    {" "}
                    <strong>12.99$</strong>{" "}
                  </td>
                  <td className="quantity" data-title="Quantity">
                    <input
                      type="number"
                      className="qty form-control"
                      value="1"
                    />
                  </td>
                  <td data-title="Total">
                    {" "}
                    <strong>12.99$</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="remove">
                    <button
                      type="button"
                      className="close-btn close-danger remove-from-cart"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </td>
                  <td data-title="Product">
                    <div className="cart-product-wrapper">
                      <img src="https://via.placeholder.com/300" alt="prod1" />
                      <div className="cart-product-body">
                        <h6>
                          {" "}
                          <a href="#">Vegetarian</a>{" "}
                        </h6>
                        <p>14 Inch</p>
                      </div>
                    </div>
                  </td>
                  <td data-title="Price">
                    {" "}
                    <strong>9.99$</strong>{" "}
                  </td>
                  <td className="quantity" data-title="Quantity">
                    <input
                      type="number"
                      className="qty form-control"
                      value="1"
                    />
                  </td>
                  <td data-title="Total">
                    {" "}
                    <strong>9.99$</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td className="remove">
                    <button
                      type="button"
                      className="close-btn close-danger remove-from-cart"
                    >
                      <span></span>
                      <span></span>
                    </button>
                  </td>
                  <td data-title="Product">
                    <div className="cart-product-wrapper">
                      <img src="https://via.placeholder.com/300" alt="prod1" />
                      <div className="cart-product-body">
                        <h6>
                          {" "}
                          <a href="#">Four Cheese</a>{" "}
                        </h6>
                        <p>21 Inch</p>
                        <p>Extra Cheese</p>
                      </div>
                    </div>
                  </td>
                  <td data-title="Price">
                    {" "}
                    <strong>13.99$</strong>{" "}
                  </td>
                  <td className="quantity" data-title="Quantity">
                    <input
                      type="number"
                      className="qty form-control"
                      value="1"
                    />
                  </td>
                  <td data-title="Total">
                    {" "}
                    <strong>13.99$</strong>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!-- Cart Table End --> */}

            {/* <!-- Coupon Code Start --> */}
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group mb-0">
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                      aria-label="Coupon Code"
                    />
                    <div className="input-group-append">
                      <button className="btn-custom shadow-none" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Coupon Code End --> */}

            {/* <!-- Cart form Start --> */}
            <div className="row ct-cart-form">
              <div className="offset-lg-6 col-lg-6">
                <h4>Cart Total</h4>
                <table>
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>90.99$</td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td>
                        {" "}
                        9.99$ <span className="small">(11%)</span>{" "}
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        {" "}
                        <b>99.99$</b>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="btn-custom primary btn-block">
                  Proceeed to Checkout
                </a>
              </div>
            </div>
            {/* <!-- Cart form End --> */}
          </div>
        </section>
        {/* <!-- Cart End --> */}
      </Layout>
    </>
  );
};

export default Cart;
