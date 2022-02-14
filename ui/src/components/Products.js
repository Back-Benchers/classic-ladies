import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products(props) {

    const value = useContext(DataContext);
    const [products] = value.products;
    console.log(products);
    const addCart = value.addCart;

    return (
        <section>
            <div className="products">
                {/* {
                    products?.filter(product => {
                        if (product?.categories?.toLowerCase().includes(props.search.toLowerCase())) {
                            return product;
                        }
                        else {
                            return false;
                        }

                    }).map(product => (
                        <div className="products-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.url[0]} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                                </h3> */}
                {/* <p className="products-desc">{product.description.toString()}</p> */}
                {/* <p className="products-price">&#8377; {product.salePrice}</p>
                                <button onClick={() => addCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                } */}
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    )
}
