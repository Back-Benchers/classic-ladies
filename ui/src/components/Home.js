import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";
import ShippingIcon from '@material-ui/icons/LocalShipping';
import SupportIcon from '@material-ui/icons/ContactSupport';
import ReturnIcon from '@material-ui/icons/MonetizationOn';
import CancelIcon from '@material-ui/icons/Cancel';
import { Carousel } from './Carousel';
import { Slideshow } from './Slider';
import Banner from "./Banner/Banner"

export default function Home(props) {

    const styles = {

        largeIcon: {
            width: 30,
            height: 30,
            marginRight: 3
        }

    };

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
        <section>
            <div className="landing-box">
                <div>
                    <h1>Everything you need. Delivered right to your door. We ship you comfort and style.</h1>
                    <p>We are India's fastest growing Ecommerce Store.</p>
                    <Link to="/products">Shop Now</Link>
                </div>

                <img src="bg.png" alt="landing-pic" />
            </div>
            <Banner />
            <Carousel />
            <div className="products">
                {
                    products.filter(product => {
                        if (product.title.toLowerCase().includes(props.search.toLowerCase())) {
                            return product;
                        }
                        else {
                            return false;
                        }

                    }).map(product => (
                        <div className="products-card" key={product.pid}>
                            <Link to={`/products/${product.pid}`}>
                                <img src={product.images[0]} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product.pid}`}>{product.title}</Link>
                                </h3>
                                <p className="products-desc">{product.description}</p>
                                <p className="products-price">&#8377; {product.price}</p>
                                <button onClick={() => addCart(product.pid)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Slideshow />
            <div className="features">
                <div className="features-card">
                    <p className="features-head"><ShippingIcon style={styles.largeIcon} /> Free Home Delivery</p>
                    <p className="features-para">No shipping Charges on Orders above &#8377; 1000.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><CancelIcon style={styles.largeIcon} /> Easy Cancellation</p>
                    <p className="features-para">Cancel anytime as per your needs.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><ReturnIcon style={styles.largeIcon} /> Easy Return &amp; Refund</p>
                    <p className="features-para">We offer 30 days return and refund policy.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><SupportIcon style={styles.largeIcon} /> 24x7 Customer Care</p>
                    <p className="features-para">We provide 24*7 Customer Care support for feedbacks, suggestions and complaints.</p>
                </div>

            </div>
        </section>
    )
}
