import React from "react";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        {/* <!-- Banner Start --> */}
        <div className="banner banner-1 banner-4 light-banner">
          <div className="banner-item">
            <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2">
              {" "}
              {/* style="background-image: url('https://via.placeholder.com/1920x1280') */}
              <div className="container">
                <img src="assets/img/misc/1.png" alt="img" />
                <h1 className="title">
                  Modernizing The Traditional Italian Pizza
                </h1>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </p>
                <a href="#" className="btn-custom primary">
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About us start --> */}
        <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                <img src="https://via.placeholder.com/1280x1560" alt="img" />
                <div className="ct-dots"></div>
              </div>
              <div className="col-lg-6">
                <div className="section-title-wrap mr-lg-30">
                  <h5 className="custom-primary">Sir Slice's Heritage</h5>
                  <h2 className="title">
                    Serving Pizzas By The Slice Since 1987
                  </h2>
                  <p className="subtitle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="subtitle">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </p>
                  <div className="signature">
                    <img src="assets/img/signature.png" alt="signature" />
                  </div>
                  <a href="menu-v1.html" className="btn-custom">
                    Check our Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About us End --> */}

        {/* <!-- Menu Start --> */}
        <div className="section section-padding pt-0">
          <div className="container">
            <div className="section-title-wrap section-header text-center">
              <h5 className="custom-primary">Pizza Menu</h5>
              <h2 className="title">Explore Our Menu</h2>
              <p className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Pepperoni Pizza</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">14.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Four Cheese</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">13.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Vegetarian</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">9.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Barbeque Chicken</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">13.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Ham & Cheese</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">11.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ct-mini-menu-item">
                  <div className="ct-mini-menu-top">
                    <h5>Specialty Pizza</h5>
                    <div className="ct-mini-menu-dots"></div>
                    <span className="custom-primary">10.99$</span>
                  </div>
                  <div className="ct-mini-menu-bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Menu End --> */}

        {/* <!-- Instagram Start --> */}
        <div className="row no-gutters">
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6 p-0">
            <a href="#" className="ct-ig-item">
              <img src="https://via.placeholder.com/640x426" alt="ig" />
            </a>
          </div>
        </div>
        {/* <!-- Instagram End --> */}
      </Layout>
    </>
  );
};
export default Home;
