import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "../style/Cust_Nav.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails";
// import Items from "./Items";
import ItemComments from "./ItemComments";
import Aboutus from "./Aboutus";
const CustomerPannel = () => {
  return (
    <>
      {/* <Items /> */}
      {/* <ItemDetails /> */}
      {/* <h1>hahhahaha</h1> */}

      {/* Routes abhi set krny hain */}
      {/* <Header /> */}
      {/* <Menu /> */}
      {/* <Main /> */}

      {/* <ItemDetails /> */}
      {/* <ItemComments /> */}
      {/* <Aboutus /> */}
      {/* <Footer /> */}

      <Header />
      <Routes>
        <Route path="/Home" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Feedback" element={<Aboutus />} />
        <Route path="Det" element={<ItemDetails />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default CustomerPannel;
