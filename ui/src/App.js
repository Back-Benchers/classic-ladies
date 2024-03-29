import React, { useState } from "react";
import Header from "./components/Header";
import { Redirect, Switch, Route } from "react-router-dom";
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

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      <Switch>
        {/* <Route exact path="/error404" component={Error} /> */}
        <Route>

          <Header setSearch={setSearch} />
          <Switch>
            <Route exact path="/" component={() => <Home search={search} />} />
            <Route exact path="/products" component={() => <Products search={search} />} />
            <Route exact path="/category/:type" component={() => <CategoryProducts />} />
            <Route exact path="/products/:id" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path='*' component={Error} />
            {/* <Redirect to="/error404" /> */}
            <Products />
          </Switch>
          <Footer />

        </Route>
      </Switch>
    </DataProvider>
  );
}

export default App;
