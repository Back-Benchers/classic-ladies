import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

function CategoryProducts() {
  const { type } = useParams();
  // const [products] = value.products;
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
