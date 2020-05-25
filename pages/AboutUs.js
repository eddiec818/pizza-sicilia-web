import React from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../Components/ui/Subheader";

const AboutUs = () => {
  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="About Us" />
        {/* <!-- Subheader End --> */}

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
                  <h5 className="custom-primary">About Us</h5>
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

        {/* <!-- Infographics Start --> */}
        <div className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2">
          {" "}
          {/* style="background-image: url('https://via.placeholder.com/1920x800')" */}
          <div className="container">
            <div className="section-title-wrap section-header text-center">
              <h2 className="title text-white">Our success Story</h2>
              <p className="subtitle text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="ct-infographic-item">
                  <i className="flaticon-employee"></i>
                  <h4>24,934</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="ct-infographic-item">
                  <i className="flaticon-pizza-slice"></i>
                  <h4>65,317</h4>
                  <p>Pizzas Made</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="ct-infographic-item">
                  <i className="flaticon-cheese"></i>
                  <h4>4,658</h4>
                  <p>Cheese Rolls</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="ct-infographic-item">
                  <i className="flaticon-soda"></i>
                  <h4>67,335</h4>
                  <p>Drinks Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Infographics End --> */}

        {/* <!-- Team members Start --> */}
        <div className="section section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-lg-30">
                <div className="section-title-wrap">
                  <h5 className="custom-primary">Our Backbone</h5>
                  <h2 className="title">Meet The Team</h2>
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
                </div>
                <a href="#" className="btn-custom">
                  View All
                </a>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="ct-team-item">
                      <div className="ct-team-thumb">
                        <img src="https://via.placeholder.com/600" alt="team" />
                      </div>
                      <div className="ct-team-desc">
                        <h5>Miranda Blue</h5>
                        <span>Executive Chef</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="ct-team-item">
                      <div className="ct-team-thumb">
                        <img src="https://via.placeholder.com/600" alt="team" />
                      </div>
                      <div className="ct-team-desc">
                        <h5>Jonathan Flock</h5>
                        <span>Assistant Chef</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="ct-team-item">
                      <div className="ct-team-thumb">
                        <img src="https://via.placeholder.com/600" alt="team" />
                      </div>
                      <div className="ct-team-desc">
                        <h5>Mich Jean</h5>
                        <span>Assistant Chef</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="ct-team-item">
                      <div className="ct-team-thumb">
                        <img src="https://via.placeholder.com/600" alt="team" />
                      </div>
                      <div className="ct-team-desc">
                        <h5>Andrew Lumber</h5>
                        <span>Assistant Chef</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Team members End --> */}

        {/* <!-- Newsletter start --> */}
        <section className="section bg-center bg-cover dark-overlay">
          {" "}
          {/* style="background-image:url('https://via.placeholder.com/1920x800')" */}
          <div className="container">
            <div className="ct-newsletter">
              <div className="section-title-wrap section-header">
                <h2 className="title">Join Our Newsletter</h2>
                <p className="subtitle">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>

              <form method="post">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="btn-custom primary"
                  name="button"
                >
                  {" "}
                  Submit <i className="far fa-paper-plane"></i>{" "}
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- Newsletter End --> */}
      </Layout>
    </>
  );
};

export default AboutUs;
