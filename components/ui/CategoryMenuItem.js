import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions de redux
import { addCart, productQuantity } from "../../redux/actions/cartActions";

const CategoryMenuItem = ({ producto }) => {
  const { id, nombre, precio, categoria } = producto;

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.products);

  const isProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === id
  );

  const addCartProduct = (producto) => {
    isProduct
      ? dispatch(productQuantity("increase", producto))
      : dispatch(addCart(producto));
  };

  return (
    <>
      {/* <!-- Product Start --> */}
      <div className="col-lg-4 col-md-6">
        <div className="product">
          {/* <div className="favorite">
            <i className="far fa-heart"></i>
          </div> */}
          <a className="product-thumb" href="menu-item-v1.html">
            {" "}
            <img src="https://via.placeholder.com/300" alt="menu item" />{" "}
          </a>
          <div className="product-body">
            <div className="product-desc">
              <h4>
                {" "}
                <a href="menu-item-v1.html">{nombre}</a>{" "}
              </h4>
              <p>
                Li Europan lingues es membres del sam familie. Lor separat
                existentie es un myth. Por scientie, musica, sport etc
              </p>
              <a
                href={`/${categoria}/${id}`}
                className="btn-custom light btn-sm shadow-none"
              >
                {" "}
                Customize <i className="fas fa-plus"></i>{" "}
              </a>
            </div>
            <div className="product-controls">
              <p className="product-price">{precio}$</p>
              <a
                onClick={() => addCartProduct(producto)}
                className="order-item btn-custom btn-sm shadow-none"
              >
                Agregar al Carrito <i className="fas fa-shopping-cart"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}
    </>
  );
};

export default CategoryMenuItem;
