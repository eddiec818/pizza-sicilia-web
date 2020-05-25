import React from "react";

const AditionalInfo = () => {
  return (
    <>
      <div className="section pt-0">
        <div className="container">
          {/* <!-- Additional Information Start --> */}
          <div className="product-additional-info">
            <ul className="nav" id="bordered-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="tab-product-desc-tab"
                  data-toggle="pill"
                  href="#tab-product-desc"
                  role="tab"
                  aria-controls="tab-product-desc"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-product-reviews-tab"
                  data-toggle="pill"
                  href="#tab-product-reviews"
                  role="tab"
                  aria-controls="tab-product-reviews"
                  aria-selected="false"
                >
                  Reviews (25)
                </a>
              </li>
            </ul>
            <div className="tab-content" id="bordered-tabContent">
              <div
                className="tab-pane fade show active"
                id="tab-product-desc"
                role="tabpanel"
                aria-labelledby="tab-product-desc-tab"
              >
                <h4>Description</h4>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica
              </div>

              <div
                className="tab-pane fade"
                id="tab-product-reviews"
                role="tabpanel"
                aria-labelledby="tab-product-reviews-tab"
              >
                <h4>Leave a Review</h4>

                <div className="ct-rating-wrapper">
                  <div className="ct-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span>Your Review</span>
                </div>

                {/* <!-- Review Form start --> */}
                <div className="comment-form">
                  <form method="post">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          name="fname"
                          value=""
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="email"
                          value=""
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          placeholder="Type your comment..."
                          name="comment"
                          rows="7"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-custom primary"
                      name="button"
                    >
                      Post Review
                    </button>
                  </form>
                </div>
                {/* <!-- Review Form End --> */}

                {/* <!-- Reviews Start --> */}
                <div className="comments-list">
                  <ul>
                    <li className="comment-item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>Henry Crow</h5>
                        <div className="ct-rating">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>Posted on: January 13 2020</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form by injected humour, or randomised words
                          which don't look even slightly
                        </p>
                        <a href="#" className="reply-link">
                          {" "}
                          Reply{" "}
                        </a>
                      </div>
                    </li>
                    <li className="comment-item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>Ilyn Rodrick</h5>
                        <div className="ct-rating">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                        </div>
                        <span>Posted on: January 13 2020</span>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet.
                        </p>
                        <a href="#" className="reply-link">
                          {" "}
                          Reply{" "}
                        </a>
                      </div>
                    </li>
                    <li className="comment-item">
                      <img
                        src="https://via.placeholder.com/300"
                        alt="comment author"
                      />
                      <div className="comment-body">
                        <h5>Fiyona Lumber</h5>
                        <div className="ct-rating">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                        </div>
                        <span>Posted on: January 13 2020</span>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classNameical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia
                        </p>
                        <a href="#" className="reply-link">
                          {" "}
                          Reply{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- Reviews End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Additional Information End --> */}
        </div>
      </div>
    </>
  );
};

export default AditionalInfo;
