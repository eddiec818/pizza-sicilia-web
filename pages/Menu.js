import React from "react";
import Layout from "../components/layout/Layout";
import Subheader from "../components/ui/Subheader";
import CategoryMenu from "../components/layout/CategoryMenu";

import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const categorias = useSelector((state) => state.products);

  return (
    <>
      <Layout>
        {/* <!-- Subheader Start --> */}
        <Subheader pagina="Menú" />
        {/* <!-- Subheader End --> */}

        {/* <!-- Menu Start --> */}
        <div className="section section-padding menu-v2">
          <div className="container">
            {Object.keys(categorias).map((categoria, index) => (
              <CategoryMenu key={index} categoria={categoria} />
            ))}
          </div>
        </div>
        {/* <!-- Menu Start --> */}
      </Layout>
    </>
  );
};

export default Menu;
