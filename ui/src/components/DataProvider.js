import React, { createContext, useState, useEffect } from "react";
import { products } from "../utils/mockData";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ uid: "", displayName: "", email: "", phoneNumber: "", photoURL: "" });

  const getData = () => {
    /* fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setProducts(myJson)
            }); */
    setProduct(products);
  };

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    console.log(check);
    if (check) {
      const data = product.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("Product has been added to cart.");
    }
  };

  const setNewUser = (newUser) => {
    setUser({
      uid: newUser.uid, displayName: newUser.displayName, email: newUser.email, phoneNumber: newUser.phoneNumber,
      photoURL: newUser.photoURL
    });
  };

  useEffect(() => {
    getData();

    const storageCart = JSON.parse(localStorage.getItem("storageCart"));
    if (storageCart) {
      setCart(storageCart);
    }

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storageCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [product, setProduct],
    cart: [cart, setCart],
    addCart: addCart,
    user: [user, setUser],
    setNewUser: setNewUser
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
