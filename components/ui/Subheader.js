import React from "react";

const Subheader = ({ pagina }) => {
  return (
    <>
      <div className="subheader dark-overlay dark-overlay-2">
        {" "}
        {/* style="background-image: url('https://via.placeholder.com/1920x1080')" */}
        <div className="container">
          <div className="subheader-inner">
            <h1>{pagina}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {pagina}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subheader;
