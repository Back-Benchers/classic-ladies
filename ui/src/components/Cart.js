import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [cartProductCount, setCartProductCount] = value.cartProductCount;
    const [total, setTotal] = useState(0);
    const [allItemCost, setAllItemCost] = useState(0);
    console.log(cartProductCount);

    useEffect(() => {

        const getTotal = () => {
            let result = cart.reduce((prev, item) => {
                return prev + (item.salePrice * cartProductCount[cartProductCount.findIndex(p => p.productId === item.id)]?.cartCount);
            }, 0);

            setAllItemCost(result);
            let flag = false;
            if (result < 1000 && flag === false) {
                flag = true;
                result = result + 100;
                setTotal(result);
            }
            else if (result > 1000 && flag === true) {
                flag = false;
                result = result - 100;
                setTotal(result);
            }
            else {
                setTotal(result);
            }
        }

        getTotal();

        return () => setTotal(0);
    }, [cart, cartProductCount])

    const increaseProduct = id => {
        cartProductCount.forEach(item => {
            if (item.productId === id) {
                item.cartCount += 1;
            }
        })
        setCartProductCount([...cartProductCount]);
    }

    const decreaseProduct = id => {
        cartProductCount.forEach(item => {
            if (item.productId === id) {
                item.cartCount === 1 ? item.cartCount = 1 : item.cartCount -= 1;
            }
        })
        setCartProductCount([...cartProductCount]);
    }

    const removeProduct = id => {
        if (window.confirm("Are you sure to remove this product ?")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1)
                    item.count = 1;
                }
            })
            setCart([...cart]);
        }
    }

    if (cart.length === 0)
        return <section id="cart-section">Cart is Empty ...!!! </section>

    return (
        <section>
            <div className="cart">
                <div className="cart-box">
                    {
                        cart.map(product => (
                            <div className="card" key={product.id}>
                                <div className="card-img" style={{ backgroundImage: `url(${product.url[0]})` }} />

                                <div className="card-content">
                                    <p title={product.title}>{product.title}</p>
                                    <h3>&#8377; {product.salePrice}</h3>

                                    <div className="amount">
                                        <button className="count" onClick={() => decreaseProduct(product.id)}> - </button>
                                        <span>{cartProductCount[cartProductCount.findIndex(p => p.productId === product.id)]?.cartCount}</span>
                                        <button className="count" onClick={() => increaseProduct(product.id)}> + </button>
                                    </div>

                                    <button className="delete" onClick={() => removeProduct(product.id)}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="checkout">
                    <p className="heading">Price Details</p>

                    <div className="price">
                        <p>Price: </p><p>&#8377; {allItemCost.toLocaleString()}</p>
                    </div>

                    <div className="delivery">
                        <p>Delivery Charges: </p>{allItemCost < 1000 ? (<p>&#8377; 100</p>) : (<p>Free</p>)}
                    </div>

                    <div className="total">
                        <p>Total: </p><p>&#8377; {total.toLocaleString()}</p>
                    </div>

                    <Link to="/cart" className="checkout-btn">Payment</Link>
                    <small><br />*Free Delivery for orders above &#8377;1000 </small>
                </div>

            </div>

        </section>
    )
}
