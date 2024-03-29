import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <Link to="/">Return Policy</Link>
                <Link to="/">Refund Policy</Link>
                <Link to="/">Cancellation Policy</Link>
                <Link to="/">Customer Service</Link>
            </div>
        </footer>
    )
}
