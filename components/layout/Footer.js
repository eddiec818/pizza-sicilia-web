import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="ct-footer footer-dark">
        {/* <!-- Top Footer --> */}
        {/* <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="https://via.placeholder.com/135x73" alt="logo" />
            </div>
            <div className="footer-buttons">
              <a href="#">
                {" "}
                <img
                  src="assets/img/android.png"
                  alt="download it on the app store"
                />
              </a>
              <a href="#">
                {" "}
                <img
                  src="assets/img/ios.png"
                  alt="download it on the app store"
                />
              </a>
            </div>
          </div>
        </div> */}

        {/* <!-- Middle Footer --> */}
        <div className="footer-middle demo-bg">
          <div className="container ">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">Information</h5>
                <ul>
                  <li>
                    {" "}
                    <a href="index.html">Home</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="blog-grid.html">Blog</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="about-us.html">About Us</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="menu-v1.html">Menu</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="contact-us.html">Contact Us</a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">Top Items</h5>
                <ul>
                  <li>
                    {" "}
                    <a href="#">Pepperoni</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Swiss Mushroom</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Barbeque Chicken</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Vegetarian</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Ham & Cheese</a>{" "}
                  </li>
                </ul>
              </div>
              
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 footer-widget">
                <div className="business-hours">
                  <h2 className="title">Opening Hours</h2>
                  <ul className="list-unstyled opening-hours">
                    <li>
                      Sunday <span className="pull-right">Closed</span>
                    </li>
                    <li>
                      Monday <span className="pull-right">9:00-22:00</span>
                    </li>
                    <li>
                      Tuesday <span className="pull-right">9:00-22:00</span>
                    </li>
                    <li>
                      Wednesday <span className="pull-right">9:00-22:00</span>
                    </li>
                    <li>
                      Thursday <span className="pull-right">9:00-22:00</span>
                    </li>
                    <li>
                      Friday <span className="pull-right">9:00-23:30</span>
                    </li>
                    <li>
                      Saturday <span className="pull-right">14:00-23:30</span>
                    </li>
                  </ul>
                </div>
                {/* <h5 className="widget-title">Social Media</h5>
                <ul className="social-media">
                  <li>
                    {" "}
                    <a href="#" className="facebook">
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="pinterest">
                      {" "}
                      <i className="fab fa-pinterest-p"></i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="google">
                      {" "}
                      <i className="fab fa-google"></i>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="twitter">
                      {" "}
                      <i className="fab fa-twitter"></i>{" "}
                    </a>{" "}
                  </li>
                </ul>
                <div className="footer-offer">
                  <p>Signup and get exclusive offers and coupon codes</p>
                  <a href="#" className="btn-custom btn-sm shadow-none">
                    Sign Up
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <div className="container">
            <ul>
              <li>
                {" "}
                <a href="#">Privacy Policy</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Refund Policy</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Cookie Policy</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Terms & Conditions</a>{" "}
              </li>
            </ul>
            <div className="footer-copyright">
              <p>
                {" "}
                Copyright &copy; 2020 <a href="#">AndroThemes</a> All Rights
                Reserved.{" "}
              </p>
              <a href="#" className="back-to-top">
                Back to top <i className="fas fa-chevron-up"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
