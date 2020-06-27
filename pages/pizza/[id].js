import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Subheader from "../../components/ui/Subheader";
import { useSelector, useDispatch } from "react-redux";
// Actions de redux
import { addCart, productQuantity } from "../../redux/actions/cartActions";

const Pizza = () => {
  const [pizzaFinal, setPizzaFinal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [salsa, setSalsa] = useState(1);
  const [queso, setQueso] = useState(1);
  const [price, setPrice] = useState(0);
  const [tamaño, setTamaño] = useState(16);
  const [cantidad, SetCantidad] = useState(1);
  const [checked, setChecked] = useState({});

  const dispatch = useDispatch();

  // Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const products = useSelector((state) => state.products["pizzas"]);

  const pizza = products.find((product) => product.id == id);

  useEffect(() => {
    if (pizza) {
      setPizzaFinal(pizza);
      setPrice(pizza.precio);
      setTamaño(pizza.tamaño);
      SetCantidad(pizza.cantidad + 1);
      pizza.ingredientes.others.forEach((ingrediente) => {
        setIngredients((state) => [...state, ingrediente]);
        setChecked((state) => ({ ...state, [ingrediente]: true }));
      });
    }
  }, [pizza]);

  useEffect(() => {
    setPizzaFinal({
      ...pizzaFinal,
      ingredientes: {
        ...pizzaFinal.ingredientes,
        salsa: salsa,
        queso: queso,
        others: ingredients,
      },
      precio: price,
      tamaño: tamaño,
      cantidad: cantidad,
    });
  }, [ingredients, price, tamaño, cantidad]);

  const cartProducts = useSelector((state) => state.cart.products);

  const isProduct = cartProducts.find((cartProduct) => cartProduct.id === id);

  const addCartProduct = (e, producto) => {
    e.preventDefault();
    isProduct
      ? dispatch(productQuantity("increase", producto))
      : dispatch(addCart(producto));
    router.push("/checkout");
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setIngredients([...ingredients, e.target.id]);
      setChecked({ ...checked, [e.target.id]: true });
      ingredients.length !== 0 && setPrice(price + 1);
    } else {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== e.target.id)
      );
      setChecked({ ...checked, [e.target.id]: false });
      price >= pizza.precio && setPrice(price - 1);
    }
  };

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Arma tu Pizza" />
        {/* <!-- Subheader End --> */}

        <div className="section product-single">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/* <!-- Main Thumb --> */}
                <div className="product-thumb">
                  <img src={`../assets/img/productos/pizza.png`} alt="pizza" />
                </div>
                {/* <!-- /Main Thumb --> */}
              </div>
              <div className="col-md-7">
                <div className="product-content">
                  {/* <!-- Product Title --> */}
                  <h2 className="title">
                    {pizza ? pizza.nombre : "Personalizada"}
                  </h2>
                  {/* <!-- /Product Title --> */}

                  {/* <!-- Price --> */}
                  <div className="price-wrapper">
                    <p className="product-price">{pizza ? price : 10.99}$</p>
                  </div>
                  {/* <!-- /Price --> */}

                  {/* <!-- Product Short Description --> */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  {/* <!-- /Product Short Description --> */}

                  {/* <!-- Variations --> */}
                  <div className="customize-variations">
                    <div className="customize-size-wrapper">
                      <h5>Size: </h5>
                      <input
                        type="radio"
                        id="size1"
                        className="sizes"
                        name="sizes"
                        defaultChecked={tamaño == 8 ? true : false}
                        style={{ display: "none" }}
                        onClick={() => setTamaño(8)}
                      />
                      <label className="customize-size" htmlFor="size1">
                        8"
                      </label>
                      <input
                        type="radio"
                        id="size2"
                        className="sizes"
                        name="sizes"
                        defaultChecked={tamaño == 12 ? true : false}
                        style={{ display: "none" }}
                        onClick={() => setTamaño(12)}
                      />
                      <label className="customize-size" htmlFor="size2">
                        12"
                      </label>
                      <input
                        type="radio"
                        id="size3"
                        className="sizes"
                        name="sizes"
                        defaultChecked={tamaño == 16 ? true : false}
                        style={{ display: "none" }}
                        onClick={() => setTamaño(16)}
                      />
                      <label className="customize-size" htmlFor="size3">
                        16"
                      </label>
                    </div>

                    <div className="row">
                      {/* <!-- Variation Start --> */}
                      <div className="col-lg-6 col-12">
                        <div className="customize-variation-wrapper">
                          <i className="flaticon-bread-roll"></i>
                          <h5>Salsa</h5>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="salsa0"
                                name="salsa"
                                className="custom-control-input"
                                onClick={() => {
                                  setSalsa(0);
                                  price <= pizza.precio
                                    ? setPrice(pizza.precio)
                                    : setPrice(price - 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="salsa0"
                              >
                                Poca
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                defaultChecked
                                id="salsa1"
                                name="salsa"
                                className="custom-control-input"
                                onClick={() => {
                                  setSalsa(1);
                                  price <= pizza.precio
                                    ? setPrice(pizza.precio)
                                    : setPrice(price - 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="salsa1"
                              >
                                Regular
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="salsa2"
                                name="salsa"
                                className="custom-control-input"
                                onClick={() => {
                                  setSalsa(2);
                                  setPrice(price + 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="salsa2"
                              >
                                Doble
                              </label>
                            </div>
                            <span>+1.00$</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Variation End --> */}

                      {/* <!-- Variation Start --> */}
                      <div className="col-lg-6 col-12">
                        <div className="customize-variation-wrapper">
                          <i className="flaticon-cheese"></i>
                          <h5>Queso</h5>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="queso0"
                                name="queso"
                                className="custom-control-input"
                                onClick={() => {
                                  setQueso(0);
                                  price <= pizza.precio
                                    ? setPrice(pizza.precio)
                                    : setPrice(price - 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="queso0"
                              >
                                Poco
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                defaultChecked
                                id="queso1"
                                name="queso"
                                className="custom-control-input"
                                onClick={() => {
                                  setQueso(1);
                                  price <= pizza.precio
                                    ? setPrice(pizza.precio)
                                    : setPrice(price - 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="queso1"
                              >
                                Regular
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="queso2"
                                name="queso"
                                className="custom-control-input"
                                onClick={() => {
                                  setQueso(2);
                                  setPrice(price + 1);
                                }}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="queso2"
                              >
                                Doble
                              </label>
                            </div>
                            <span>+1.00$</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Variation End --> */}

                      {/* <!-- Variation Start --> */}
                      <div className="col-lg-12 col-12">
                        <div className="customize-variation-wrapper">
                          <i className="flaticon-calzone-and-cutted-slice"></i>
                          <h5 className="d-block">Ingredientes</h5>
                          <div className="row d-flex">
                            <div className="col-lg-6 col-12">
                              <div
                                className="customize-variation-item"
                                data-price="2.00"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    defaultChecked={
                                      checked.peperonni ? true : false
                                    }
                                    id="peperonni"
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="peperonni"
                                  >
                                    Peperonni
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="1.20"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="jamon"
                                    defaultChecked={
                                      checked.jamon ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="jamon"
                                  >
                                    Jamon
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="0.75"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="pollo"
                                    defaultChecked={
                                      checked.pollo ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="pollo"
                                  >
                                    Pollo
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="0.25"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="bacon"
                                    defaultChecked={
                                      checked.bacon ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="bacon"
                                  >
                                    Bacon
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                            </div>
                            <div className="col-lg-6 col-12">
                              <div
                                className="customize-variation-item"
                                data-price="2.00"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="pimenton"
                                    defaultChecked={
                                      checked.pimenton ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="pimenton"
                                  >
                                    Pimenton
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="1.20"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cebolla"
                                    defaultChecked={
                                      checked.cebolla ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cebolla"
                                  >
                                    Cebolla
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="0.75"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="hongo"
                                    defaultChecked={
                                      checked.hongo ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="hongo"
                                  >
                                    Hongos
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div
                                className="customize-variation-item"
                                data-price="0.25"
                              >
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="aceituana"
                                    defaultChecked={
                                      checked.aceituna ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="aceituana"
                                  >
                                    Aceituna
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Variation End --> */}
                    </div>
                  </div>
                  {/* <!-- /Variations --> */}

                  {/* <!-- Add To Cart Form --> */}
                  <form className="atc-form" method="post">
                    <div className="form-group">
                      <label>Quantity</label>
                      <div className="qty">
                        <span
                          className="qty-subtract"
                          onClick={() => SetCantidad(cantidad - 1)}
                        >
                          <i className="fas fa-minus"></i>
                        </span>
                        <input type="text" name="qty" defaultValue={cantidad} />
                        <span
                          className="qty-add"
                          onClick={() => SetCantidad(cantidad + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </span>
                      </div>
                    </div>
                    <button
                      // href="/checkout"
                      name="button"
                      className="btn-custom secondary"
                      onClick={(e) => addCartProduct(e, calzoneFinal)}
                    >
                      {" "}
                      Order <i className="fas fa-shopping-cart"></i>{" "}
                    </button>
                  </form>
                  {/* <!-- /Add To Cart Form --> */}

                  {/* <!-- Product Meta --> */}
                  {/* <ul className="product-meta">
                    <li>
                      <span>Categoria: </span>
                      <div className="product-meta-item">
                        <a href="/menu">Pizza</a>
                      </div>
                    </li>
                    <li>
                      <span>Tags: </span>
                      <div className="product-meta-item">
                        <a href="#">Pizza</a>,<a href="#">Cheese</a>,
                        <a href="#">Cheesy Crusts</a>
                      </div>
                    </li>
                    <li>
                      <span>SKU: </span>
                      <div className="product-meta-item">
                        <span>N/A</span>
                      </div>
                    </li>
                  </ul> */}
                  {/* <!-- /Product Meta --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pizza;
