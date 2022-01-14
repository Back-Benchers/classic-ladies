import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { products } from '../utils/mockData'
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

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
                    return <div><p>Product Name: {e.title}</p>
                    <p>Product Description: {e.description}</p><br /></div>;
                }
            })}
            {/* <section>
            <div className="products">
                {
                    products?.filter(product => {
                        if (product?.title?.toLowerCase().includes(props.search.toLowerCase())) {
                            return product;
                        }
                        else {
                            return false;
                        }

                    }).map(product => (
                        <div className="products-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.images[0]} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                                </h3>
                                <p className="products-desc">{product.description}</p>
                                <p className="products-price">&#8377; {product.price}</p>
                                <button onClick={() => addCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section> */}
        </div>
    );
}

export default CategoryProducts;