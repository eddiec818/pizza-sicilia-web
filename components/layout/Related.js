import React from "react";
import RelatedItem from "../ui/RelatedItem";

const Related = () => {
  return (
    <>
      {/* <!-- Related Start --> */}
      <div className="section section-padding related-products pt-0">
        <div className="container">
          <h3>You might also like</h3>

          <div className="row">
            {/* <!-- Product Start --> */}
            <RelatedItem />
            {/* <!-- Product End --> */}

          </div>
        </div>
      </div>
      {/* <!-- Related End --> */}
    </>
  );
};

export default Related;
