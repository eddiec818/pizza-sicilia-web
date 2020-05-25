import React from "react";

const CheckoutLogin = () => {
  return (
    <>
      <div className="ct-notice">
        <p>
          Are you a returning customer? <a href="">Click here to login</a>{" "}
        </p>
      </div>
      <div className="ct-notice-content">
        <div className="row">
          <div className="col-xl-6 form-group">
            <label>Email Address</label>
            <input
              type="text"
              className="form-control"
              name="login-email"
              placeholder="Email Address"
            />
          </div>
          <div className="col-xl-6 form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="login-pass"
              placeholder="Password"
            />
          </div>
          <div className="col-12 form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="rememberMe"
              />
              <label className="custom-control-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-custom shadow-none btn-sm"
              name="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutLogin;
