import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { products } from '../utils/mockData'

function CategoryProducts() {
    const { type } = useParams();
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
        <div>
            {products.map(e => {
                if(e.categories==type) {
                    return `Product Name: ${e.title}
                    Product Description: ${e.description}`;
                }
            })}
        </div>
    );
}

export default CategoryProducts;