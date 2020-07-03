import React, { useState } from "react";

const CheckoutCoupon = () => {
  const [ctOpen, setCtOpen] = useState(false);

  return (
    <>
      <div className="ct-notice">
        <p>
          Tienes algun codigo de Cupón?{" "}
          <a
            className="btn-custom"
            onClick={() => {
              setCtOpen(!ctOpen);
            }}
          >
            Click para aplicarlo
          </a>{" "}
        </p>
      </div>
      <div
        className="ct-notice-content"
        style={ctOpen ? { display: "block" } : { display: "none" }}
      >
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
