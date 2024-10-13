import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import "./App.css";
import Cart from "./component/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./component/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/Login";
import AuthContext from './Contextapi/AuthContext.jsx'
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Form from "./component/Form.jsx";

const App = () => {
  const [productId, setProudctId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);

  }, [productId]);

  return (
    <>
    <AuthContext>
      <BrowserRouter>
        <Header cartAllProduct={cartAllProduct}/>
        <Routes>
          <Route
            path="/Home"
            element={<PrivateRoutes><Home setProductId={setProudctId} /></PrivateRoutes>}
          ></Route>
          <Route
            path="/cart"
            element={<PrivateRoutes><Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/></PrivateRoutes>}
          ></Route>
          <Route path="/Contact"
            element={<PrivateRoutes><Contact/></PrivateRoutes>}
          >
          </Route>
          <Route path="/About"
            element={<PrivateRoutes><About/></PrivateRoutes>}
          >
          </Route>
          <Route path="/"
            element={<Login/>}
          >
          </Route>
          <Route path="/Form"
            element={<PrivateRoutes><Form/></PrivateRoutes>}
          >
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContext>
    </>
  );
};

export default App;
