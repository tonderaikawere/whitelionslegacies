import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import ScrollToTop from "../ScrollToTop";
import { CartProvider } from "../../context/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <Fragment>
        <Header />
        <ScrollToTop />
        <div className="app__content">
          <Routers />
        </div>
        <Footer />
      </Fragment>
    </CartProvider>
  );
};

export default Layout;
