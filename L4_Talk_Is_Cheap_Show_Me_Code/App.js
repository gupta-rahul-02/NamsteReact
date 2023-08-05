import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import {Body} from "./src/component/Body"
import Footer from "./src/component/Footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
