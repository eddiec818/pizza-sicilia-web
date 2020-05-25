import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
//ui components
import Subheader from "../components/ui/Subheader";
import CheckoutLogin from "../components/ui/CheckoutLogin";
import CheckoutCoupon from "../components/ui/CheckoutCoupon";
import CheckoutBuyerInfo from "../components/ui/CheckoutBuyerInfo";
import CheckoutTableItem from "../components/ui/CheckoutTableItem";

const Checkout = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Checkout" />
        {/* <!-- Subheader End --> */}

        {/* <!-- Checkout Start --> */}
        <section className="section">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-xl-7">
                  {/* <!-- Login --> */}
                  {!usuario && (
                    <div className="checkout-login-div">
                      <p>
                        Ya estas registrado?{" "}
                        <a href="/login">Click para iniciar Sesión</a>{" "}
                      </p>
                    </div>
                  )}
                  {/* <!-- Coupon Code --> */}
                  <CheckoutCoupon />

                  {/* <!-- Buyer Info --> */}
                  <CheckoutBuyerInfo />
                  {/* <!-- /Buyer Info --> */}
                </div>
                <div className="col-xl-5 checkout-billing">
                  {/* <!-- Order Details Start --> */}
                  <table className="ct-responsive-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qunantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CheckoutTableItem />
                    </tbody>
                  </table>

                  {/* <!-- Credit Card Details --> */}
                  {/* <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="master-number"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="master-name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="row">
                    <div className="col-xl-6 form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        name="master-expiry"
                        placeholder="Expiry Date (MM/YY)"
                      />
                    </div>
                    <div className="col-xl-6 form-group">
                      <label>CVV*</label>
                      <input
                        type="number"
                        className="form-control"
                        name="master-cvv"
                        placeholder="CVV"
                      />
                    </div>
                  </div> */}

                  <p className="small">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a className="btn-link" href="#">
                      privacy policy.
                    </a>{" "}
                  </p>
                  <button
                    type="submit"
                    className="btn-custom primary btn-block"
                  >
                    Place Order
                  </button>

                  {/* <!-- Order Details End --> */}
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* <!-- Checkout End --> */}
      </Layout>
    </>
  );
};

export default Checkout;
