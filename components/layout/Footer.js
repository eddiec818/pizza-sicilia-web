import React, { useState, useEffect } from "react";

const Footer = () => {
  const [day, setDay] = useState(0);

  useEffect(() => {
    setDay(new Date().getDay());
  }, []);

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
              <div
                className="col-xl-4 col-lg-4 col-md-5 col-sm-12 footer-widget"
                style={{ maxHeight: "270px" }}
              >
                <div className="business-hours">
                  <h2 className="title">Horario de Atención</h2>
                  <ul className="list-unstyled opening-hours">
                    <li className={day === 0 ? "today" : null}>
                      Domingo <span>Cerrado</span>
                    </li>
                    <li className={day === 1 ? "today" : null}>
                      Lunes <span>Cerrado</span>
                    </li>
                    <li className={day === 2 ? "today" : null}>
                      Martes <span>10:00 a.m. - 5:00 p.m.</span>
                    </li>
                    <li className={day === 3 ? "today" : null}>
                      Miercoles <span>10:00 a.m. - 5:00 p.m.</span>
                    </li>
                    <li className={day === 4 ? "today" : null}>
                      Jueves <span>10:00 a.m. - 5:00 p.m.</span>
                    </li>
                    <li className={day === 5 ? "today" : null}>
                      Viernes <span>10:00 a.m. - 5:00 p.m.</span>
                    </li>
                    <li className={day === 6 ? "today" : null}>
                      Sábado <span>10:00 a.m. - 5:00 p.m.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 footer-widget">
                <h5 className="widget-title">La Siciliana Express</h5>
                <ul>
                  <li>
                    {" "}
                    <a href="#">Home</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Menu</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Ubicaciones</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Nosotros</a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                <div className="footer-offer d-flex">
                  {" "}
                  <a href="/singup" className="mr-2">
                    Registrate
                  </a>
                  <p> para recibir ofertas y cupones.</p>
                </div>
                <div className="d-flex mt-5">
                  <h5 className="widget-title mr-3">Redes Sociales</h5>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-copyright">
              <p>
                {" "}
                Copyright &copy; 2020 <a href="#">LeCreations</a> All Rights
                Reserved.{" "}
              </p>
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
