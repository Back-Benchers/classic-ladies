import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/mockData";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import Products from "./Products";

function CategoryProducts() {
  const { type } = useParams();
  const value = useContext(DataContext);
  // const [products] = value.products;
  const addCart = value.addCart;
  // const [filteredProducts, useFilteredProducts] = useState([])

  // const fetchProducts = () => {
  //     Promise.resolve(products)
  //         .then(res => {
  //             console.log("Products:", res);
  //         })
  //         .then(data => {
  //         });
  // };

  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <Products search={type} />
  );
}

export default CategoryProducts;
