import React from "react";

const CheckoutCoupon = () => {
  return (
    <>
      <div className="ct-notice">
        <p>
          Tienes algun codigo de Cupón? <a href="#">Click para aplicarlo</a>{" "}
        </p>
      </div>
      <div className="ct-notice-content">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Coupon Code"
          />
          <div className="input-group-append">
            <button className="btn-custom shadow-none" type="button">
            Aplicar Cupón
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCoupon;
