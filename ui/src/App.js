import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";
import Register from "./components/LoginSignup/Register";
import Login from "./components/LoginSignup/Login";
import Error from "./components/Error";
import CategoryProducts from "./components/CategoryProducts";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      <Header setSearch={setSearch} />
      <Routes>
        {/* <Route exact path="/error404" component={Error} /> */}
        <Route exact path="/" element={<Home search={search} />} />
        <Route exact path="/products" element={<Products search={search} />} />
        <Route exact path="/category/:type" element={<CategoryProducts />} />
        <Route exact path="/products/:id" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route path='*' element={<Error />} />
        {/* <Navigate to="/error404" /> */}
      </Routes>
      <Products />
      <Footer />
    </DataProvider>
  );
}

export default App;
