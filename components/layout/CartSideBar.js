import React, { useState, useEffect } from "react";
import CartSidebarItem from "../ui/CartSidebarItem";
import { useSelector, useDispatch } from "react-redux";

import { clearCart, cartOpen } from "../../redux/actions/cartActions";
import Link from "next/link";

const CartSideBar = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.products);
  const cartCost = useSelector((state) => state.cart.cartCost);
  const cartOpened = useSelector((state) => state.cart.cartOpen);

  return (
    <>
      <div className={`cart-sidebar-wrapper ${cartOpened ? "cart-open" : ""}`}>
        <aside className="cart-sidebar">
          <div className="cart-sidebar-header">
            <h3>Your Cart</h3>
            {cartProducts.length > 0 && (
              <button
                className="btn-custom"
                onClick={() => dispatch(clearCart())}
              >
                Vaciar Carrito
              </button>
            )}
            <div
              className="close-btn cart-trigger close-dark"
              onClick={() => dispatch(cartOpen(false))}
            >
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="cart-sidebar-body">
            {/* <div className="cart-sidebar-scroll"> */}
            {cartProducts.length === 0 ? (
              <p>No hay productos en el Carrito</p>
            ) : (
              cartProducts.map((cartProduct) => (
                <CartSidebarItem key={cartProduct.id} producto={cartProduct} />
              ))
            )}

            {/* </div> */}
          </div>
          <div className="cart-sidebar-footer">
            <h4>
              Total: <span>{Number(cartCost).toFixed(2)}$</span>{" "}
            </h4>
            <Link href="/checkout">
              <a
                className="btn-custom"
                onClick={() => dispatch(cartOpen(false))}
              >
                Checkout
              </a>
            </Link>
          </div>
        </aside>
        <div className="cart-sidebar-overlay cart-trigger"></div>
      </div>
    </>
  );
};

export default CartSideBar;
