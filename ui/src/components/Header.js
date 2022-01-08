import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from "./DataProvider";

export default function Header(props) {

    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const styles = {

        largeIcon: {
            width: 28,
            height: 28
        },

        styleMenu: {
            right: menu ? 0 : "-100%",
            backgroundColor: "whitesmoke"
        }
    };

    const handleChange = event => {
        props.setSearch(event.target.value);
    };

    return (
        <header className="header">
            <div className="logo">
                {/* <h1><Link to="/">Classic Ladies</Link></h1> */}
                <Link to="/"><img className="img-logo" src="./tcl.png" alt="The Classic Ladies" /></Link>
            </div>
            <form action="#" autoComplete="off">
                <input type="text" id="input-search" name="search" placeholder="Search..." onChange={handleChange} />
            </form>

            <ul style={styles.styleMenu}>
                <li><Link to="/products">Categories</Link></li>
                <li><Link to="/register">Login/Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src="./cross.png" alt="close-menu" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <ShoppingCartIcon style={styles.largeIcon} className="menu"></ShoppingCartIcon>
                </Link>
            </div>

            <div className="menu" onClick={toggleMenu}>
                <img src="menu.svg" alt="menu" />
            </div>

        </header>
    )
}
