import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import Subheader from "../../components/ui/Subheader";
import { useSelector, useDispatch } from "react-redux";
// Actions de redux
import { addCart, productQuantity } from "../../redux/actions/cartActions";

const Alitas = () => {
  const [alitasFinal, setAlitasFinal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState(6.5);
  const [salsaAparte, setSalsaAparte] = useState(false);
  const [cantidad, SetCantidad] = useState(1);
  const [checked, setChecked] = useState({});

  const dispatch = useDispatch();

  // Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const products = useSelector((state) => state.products["alitas"]);

  const alitas = products.find((product) => product.id == id);

  useEffect(() => {
    if (alitas) {
      setAlitasFinal(alitas);
      setPrice(alitas.precio);
      setSalsaAparte(alitas.ingredientes.salsaAparte);
      SetCantidad(alitas.cantidad + 1);
      alitas.ingredientes.others.forEach((ingrediente) => {
        setIngredients((state) => [...state, ingrediente]);
        setChecked((state) => ({ ...state, [ingrediente]: true }));
      });
    }
  }, [alitas]);

  useEffect(() => {
    setAlitasFinal({
      ...alitasFinal,
      ingredientes: {
        ...alitasFinal.ingredientes,
        salsaAparte,
        others: ingredients,
      },
      precio: price,
      cantidad: cantidad - 1,
    });
  }, [ingredients, price, cantidad]);

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
      setIngredients([e.target.id]);
      setChecked({ ...checked, [e.target.id]: true });
    } else {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== e.target.id)
      );
      setChecked({ ...checked, [e.target.id]: false });
    }
  };

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Alitas" />
        {/* <!-- Subheader End --> */}

        <div className="section product-single">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                {/* <!-- Main Thumb --> */}
                <div className="product-thumb">
                  <img
                    src={`../assets/img/productos/alitas.png`}
                    alt="alitas"
                  />
                </div>
                {/* <!-- /Main Thumb --> */}
              </div>
              <div className="col-md-7">
                <div className="product-content">
                  {/* <!-- Product Title --> */}
                  <h2 className="title">
                    {alitas
                      ? `${
                          alitas.categoria[0].toUpperCase() +
                          alitas.categoria.slice(1)
                        } ${alitas.nombre}`
                      : "Personalizada"}
                  </h2>
                  {/* <!-- /Product Title --> */}

                  {/* <!-- Price --> */}
                  <div className="price-wrapper">
                    <p className="product-price">{alitas ? price : 9.0}$</p>
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
                    {/*<div className="customize-size-wrapper">
                      <h5>Size: </h5>
                      <input
                        type="radio"
                        id="regular"
                        className="sizes"
                        name="sizes"
                        defaultChecked={tamaño == "regular" ? true : false}
                        style={{ display: "none" }}
                        onClick={() => setTamaño("regular")}
                      />
                      <label className="customize-size" htmlFor="regular">
                        Regular
                      </label>
                      <input
                        type="radio"
                        id="grande"
                        className="sizes"
                        name="sizes"
                        defaultChecked={tamaño == "grande" ? true : false}
                        style={{ display: "none" }}
                        onClick={() => setTamaño("grande")}
                      />
                      <label className="customize-size" htmlFor="grande">
                        Grande
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
                    </div>*/}

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
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="salsa0"
                              >
                                Bañadas
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="salsa1"
                                name="salsa"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="salsa1"
                              >
                                Aparte
                              </label>
                            </div>
                            <span>+0.00$</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Variation End --> */}

                      {/* <!-- Variation Start --> */}
                      <div className="col-lg-6 col-12">
                        <div className="customize-variation-wrapper">
                          <i className="flaticon-cheese"></i>
                          <h5>Papas</h5>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="papas0"
                                name="papas"
                                className="custom-control-input"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="papas0"
                              >
                                Regular
                              </label>
                            </div>
                            <span>+1.00$</span>
                          </div>
                          <div className="customize-variation-item">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="papas1"
                                name="papas"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="papas1"
                              >
                                Curly
                              </label>
                            </div>
                            <span>+2.00$</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Variation End --> */}

                      {/* <!-- Variation Start --> */}
                      <div className="col-lg-12 col-12">
                        <div className="customize-variation-wrapper">
                          <i className="flaticon-pizza-and-cutted-slice"></i>
                          <h5 className="d-block">Salsas Adicionales</h5>
                          <div className="row d-flex">
                            <div className="col-lg-6 col-12 d-flex">
                              <div className="customize-variation-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    defaultChecked={
                                      checked.buffalo ? true : false
                                    }
                                    id="buffalo"
                                    name="ingrediente"
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="buffalo"
                                  >
                                    Buffalo
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div className="customize-variation-item ml-5">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="bbq"
                                    name="ingrediente"
                                    defaultChecked={checked.bbq ? true : false}
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="bbq"
                                  >
                                    BBQ
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                              <div className="customize-variation-item ml-5">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="honey"
                                    name="ingrediente"
                                    defaultChecked={
                                      checked.honey ? true : false
                                    }
                                    onClick={(e) => handleCheck(e)}
                                  />
                                  <label
                                    className="custom-control-label d-block"
                                    htmlFor="honey"
                                  >
                                    Honey_Mustard
                                  </label>
                                </div>
                                <span>+1.00$</span>
                              </div>
                            </div>
                            {/* <div className="col-lg-6 col-12">
                              <div className="customize-variation-item">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
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
                                <span>+2.00$</span> 
                              </div>
                            </div> */}
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
                      onClick={(e) => addCartProduct(e, alitasFinal)}
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

export default Alitas;
