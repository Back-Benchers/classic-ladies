import React from "react";
import notfound from "../assets/404_not_found.svg"
function Notfound() {
    return (
        <div className="not-found">
            <img src={notfound} alt="notfound" /> {/* style={{ background: `url(${})` }}> */}

        </div>
    )
}
export default Notfound;