import React from "react";

const CheckoutBuyerInfo = () => {
  return (
    <>
      <h4>Billing Details</h4>
      <div className="row">
        <div className="form-group col-xl-6">
          <label>
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-12">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            name="cname"
            className="form-control"
          />
        </div>
        <div className="form-group col-xl-12">
          <label>
            Country <span className="text-danger">*</span>
          </label>
          <select className="form-control">
            <option value="Panama">Panama</option>
          </select>
        </div>
        <div className="form-group col-xl-6">
          <label>
            Street Address 1 <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Street Address One"
            name="addr-1"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-6">
          <label>Street Address 2</label>
          <input
            type="text"
            placeholder="Street Address Two (Optional)"
            name="addr-1"
            className="form-control"
          />
        </div>
        <div className="form-group col-xl-12">
          <label>
            Town / City <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Town/City"
            name="town"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="form-control"
            required=""
          />
        </div>
        <div className="form-group col-xl-12 mb-0">
          <label>Order Notes</label>
          <textarea
            name="name"
            rows="5"
            className="form-control"
            placeholder="Order Notes (Optional)"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CheckoutBuyerInfo;
