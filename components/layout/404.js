import React from "react";
import Layout from "./Layout";

const NotFound = () => {
  return (
    <>
      <Layout>
        <div class="page-404-wrapper">
          <div class="page-404-text">
            <h1>Page Not Found</h1>
            <p>Sorry, the page you're looking for does not exist</p>
            <a href="index.html" class="btn-custom">
              Go Back Home
            </a>
          </div>

          <div class="banner-bottom-img">
            <img src="https://via.placeholder.com/591x283" alt="veg" />
            <img src="https://via.placeholder.com/600" alt="pizza" />
            <img src="https://via.placeholder.com/600x377" alt="veg" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
