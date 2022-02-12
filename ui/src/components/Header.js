import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from "./DataProvider";

export default function Header(props) {

    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;
    const user = value.user[0];
    const setNewUser = value.setNewUser;

    console.log(user);


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

    const logout = () => {
        localStorage.clear();
        setNewUser({ uid: "", displayName: "", email: "", phoneNumber: "", photoURL: "" });
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/"><img className="img-logo" src="./tcl2.png" alt="The Classic Ladies" /></Link>
            </div>
            <form action="#" autoComplete="off">
                <input type="text" id="input-search" name="search" placeholder="Search..." onChange={handleChange} />
            </form>

            <ul style={styles.styleMenu}>
                <li><Link to="/products">Categories</Link></li>
                {user.displayName ? <li><Link to="/profile">{user.displayName}</Link></li> :
                    <li><Link to="/register">Login/Register</Link></li>}
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
