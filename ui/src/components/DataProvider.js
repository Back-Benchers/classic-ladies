import React, { createContext, useState, useEffect } from 'react';
import { products } from '../utils/mockData';

export const DataContext = createContext();

export const DataProvider = (props) => {

    // console.log("data provider products", products);

    const [products, setProducts] = useState([]);

    const getData = () => {
        fetch('data.json'
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
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const [cart, setCart] = useState([]);

    const addCart = (pid) => {
        const check = cart.every(item => {
            return item.pid !== pid;
        })

        if (check) {
            const data = products.filter(product => {
                return product.pid === pid;
            })
            setCart([...cart, ...data]);
        }
        else {
            alert("Product has been added to cart.");
        }
    }

    useEffect(() => {

        const storageCart = JSON.parse(localStorage.getItem("storageCart"));

        if (storageCart) {
            setCart(storageCart);
        }
    }, [])

    useEffect(() => {

        localStorage.setItem("storageCart", JSON.stringify(cart));
    }, [cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
