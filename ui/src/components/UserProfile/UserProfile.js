import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

export default function UserProfile() {
    const value = useContext(DataContext);
    const [user, setUser] = value.user;

    return <section>
        <div className="page-title">
            <h2>Profile</h2>
        </div>
        <div className="profile-img">
            <img className="img-icon" src="" alt="No Image" />
        </div>
    </section>;
}
