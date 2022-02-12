import React, { createContext, useState, useEffect } from "react";
import { products } from "../utils/mockData";
import { toast } from 'react-toastify';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartProductCount, setCartProductCount] = useState([]);
  const [user, setUser] = useState({ uid: "", displayName: "", email: "", phoneNumber: "", address: "", photoURL: "" });

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
      console.log(data);
      setCart([...cart, ...data]);
      toast.success(`${data[0].title} added to Cart!`, {
        position: "bottom-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCartProductCount([...cartProductCount, { productId: data[0].id, cartCount: 1 }]);
    } else {
      alert("Product has been added to cart.");
    }
  };

  const setNewUser = (newUser) => {
    setUser({
      uid: newUser.uid, displayName: newUser.displayName, email: newUser.email, phoneNumber: newUser.phoneNumber,
      address: newUser.address, photoURL: newUser.photoURL
    });
  };

  useEffect(() => {
    getData();

    const storageCart = JSON.parse(localStorage.getItem("storageCart"));
    const cartStorageCount = JSON.parse(localStorage.getItem("cartStorageCount"));
    if (storageCart) {
      setCart(storageCart);
    }
    if (cartStorageCount) {
      setCartProductCount(cartStorageCount);
    }

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storageCart", JSON.stringify(cart));
    localStorage.setItem("cartStorageCount", JSON.stringify(cartProductCount));
  }, [cart]);

  const value = {
    products: [product, setProduct],
    cart: [cart, setCart],
    addCart: addCart,
    user: [user, setUser],
    setNewUser: setNewUser,
    cartProductCount: [cartProductCount, setCartProductCount]
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
