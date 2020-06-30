import React from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";
import Location from "../components/ui/Location";

const Locations = () => {
  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Ubicaciones" />
        {/* <!-- Subheader End --> */}

        {/* <!-- Locations Wrapper Start --> */}
        <div className="section">
          <div className="container locations-wrapper">
            <Location />
            <Location />
          </div>
        </div>
        {/* <!-- Locations Wrapper End --> */}
      </Layout>
    </>
  );
};

export default Locations;
