import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
// Hook
import useUserInfo from "../hooks/useUserInfo";
// ui components
import Swal from "sweetalert2";
import Subheader from "../components/ui/Subheader";
import CheckoutCoupon from "../components/ui/CheckoutCoupon";
import CheckoutBuyerInfo from "../components/ui/CheckoutBuyerInfo";
import CheckoutTableItem from "../components/ui/CheckoutTableItem";
// Actions de redux
import { clearCart } from "../redux/actions/cartActions";
import Router from "next/router";

const Checkout = () => {
  const [order, setOrder] = useState({ payMethod: "efectivo" });
  const [userEmail, setUserEmail] = useState("nada");

  const { usuario, firebase } = useContext(FirebaseContext);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.currentUser);

  const { userInfo } = useUserInfo(userEmail);

  useEffect(() => {
    setOrder({
      ...order,
      productos: cart.products,
      precioTotal: cart.cartCost,
      user: currentUser.info,
      create_at: new Date(),
      status: "pending",
    });
  }, [cart, currentUser]);

  useEffect(() => {
    if (usuario) {
      setUserEmail(usuario.email);
    }
  }, [usuario]);

  const swalDanger = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-warning",
    },
    buttonsStyling: false,
  });

  const addOrder = async (e) => {
    e.preventDefault();
    try {
      cart.products.length < 1 &&
        swalDanger.fire({
          title: "No hay productos en la cesta.",
          icon: "warning",
        });
      await firebase.db.collection("orders").add(order);
      if (
        currentUser.info.saveInfo &&
        currentUser.info.email !== userInfo.email
      ) {
        await firebase.db.collection("usersInfo").add(currentUser.info);
      }
      dispatch(clearCart());
      Router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const TableBody = () =>
    cart.products.length > 0 ? (
      cart.products.map((cartProduct, index) => (
        <CheckoutTableItem key={index} cartProduct={cartProduct} />
      ))
    ) : (
      <tr>
        <td colSpan="2">No hay productos en el carrito</td>
        <td></td>
      </tr>
    );

  const handlePayMethod = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Checkout" />
        {/* <!-- Subheader End --> */}

        {/* <!-- Checkout Start --> */}
        <section className="section">
          <div className="container">
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
                <CheckoutBuyerInfo usuario={usuario} firebase={firebase} />
                {/* <!-- /Buyer Info --> */}
              </div>
              <div className="col-xl-5 checkout-billing">
                {/* <!-- Order Details Start --> */}
                <table className="ct-responsive-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th className="text-center">Qunantity</th>
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableBody />
                    <tr>
                      <th colSpan="2">Total a Pagar</th>
                      <th>{cart.cartCost}$</th>
                    </tr>
                  </tbody>
                </table>
                <div className="form-group">
                  <label>
                    Metodo de Pago <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-control"
                    name="payMethod"
                    onChange={handlePayMethod}
                  >
                    <option defaultValue="efectivo">Efectivo</option>
                    <option value="yappy">Yappy</option>
                    <option value="nequi">Nequi</option>
                  </select>
                </div>

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
                  Tus datos personales serán utilizados para tu orden, Mejorar
                  tu experiencia en este sitio web, y otros propositos descritos
                  en nuestra{" "}
                  <a className="btn-link" href="#">
                    Política de Privacidad.
                  </a>{" "}
                </p>
                <button
                  className="btn-custom primary btn-block"
                  onClick={addOrder}
                >
                  Realizar Pedido
                </button>

                {/* <!-- Order Details End --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Checkout End --> */}
      </Layout>
    </>
  );
};

export default Checkout;
