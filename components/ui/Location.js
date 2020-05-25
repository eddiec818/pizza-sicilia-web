import React from "react";

const Location = () => {
  return (
    <>
      <div className="location-item">
        <div className="row">
          <div className="col-md-6">
            <div className="location-item-inner">
              <img src="https://via.placeholder.com/640x426" alt="location" />
              <div className="location-desc">
                <h3>Slices London</h3>
                <p>Main Branch</p>
              </div>
              <div className="location-info">
                <div className="row">
                  <div className="col-6">
                    <span>Cecilia Chapman</span>
                    <span>711-2880 Nulla St.</span>
                    <span>Mankato Mississippi 96522</span>
                  </div>
                  <div className="col-6">
                    <span>
                      {" "}
                      Give us a call:{" "}
                      <a href="tel:(257)563-7401">(257) 563-7401</a>{" "}
                    </span>
                    <span>
                      {" "}
                      Email Us:{" "}
                      <a href="mailto:info@slices.com">info@slices.com</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ct-contact-map-wrapper">
              <div
                id="map1"
                data-lat="51.5"
                data-lng="-0.09"
                className="ct-contact-map"
              ></div>
              <a
                href="https://maps.google.com/?q=51.5,-0.09"
                target="_blank"
                className="btn-custom shadow-none"
              >
                View in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
