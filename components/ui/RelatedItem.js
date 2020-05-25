import React from "react";

const RelatedItem = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="product">
          <a className="product-thumb" href="menu-item-v1.html">
            {" "}
            <img src="https://via.placeholder.com/300" alt="menu item" />{" "}
          </a>
          <div className="product-body">
            <div className="product-desc">
              <h4>
                {" "}
                <a href="menu-item-v1.html">Pepperoni</a>{" "}
              </h4>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica, sport etc
              </p>
              <p className="product-price">12.99$</p>
              <div className="favorite">
                <i className="far fa-heart"></i>
              </div>
            </div>
            <div className="product-controls">
              <a href="#" className="order-item btn-custom btn-sm shadow-none">
                Order <i className="fas fa-shopping-cart"></i>{" "}
              </a>
              <a
                href="#"
                className="btn-custom secondary btn-sm shadow-none"
                data-toggle="modal"
                data-target="#customizeModal"
              >
                {" "}
                Customize <i className="fas fa-plus"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedItem;
