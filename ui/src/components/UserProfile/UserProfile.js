import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataProvider";
import validate from "../LoginSignup/Validation";
import useForm from "../LoginSignup/useForm";
import { getAuth, updateProfile } from "firebase/auth";

export default function UserProfile() {
    const value = useContext(DataContext);
    const [user, setUser] = value.user;
    const [editMode, setEditMode] = useState(false);
    const { handleInput, values } = useForm(validate);
    const auth = getAuth();

    function toggleEditMode() {
        if (editMode) {
            console.log(values);
            values.username = values.firstname + " " + values.lastname;
            updateProfile(auth.currentUser, {
                displayName: values.username,
                photoURL: values.photoURL,
                phoneNumber: values.phone
            }).then(() => {
                // Profile updated!
                // ...
                setUser({
                    uid: auth.currentUser.uid, displayName: values.username, email: values.email, phoneNumber: values.phone,
                    address: values.address, photoURL: auth.currentUser.photoURL
                });
                // localStorage.setItem("user", JSON.stringify(user));
                console.log(auth.currentUser);
                console.log(user);
                // setValues({ username: "", firstname: "", lastname: "", email: "", phone: "", address: "", password: "" });
            }).catch((error) => {
                // An error occurred
                // ...
            });
        }
        setEditMode(mode => !mode);

        console.log(values);
        console.log(user);
    }

    useEffect(() => {
        fillDefaultValues();
        console.log(values);
    }, [editMode]);

    function fillDefaultValues() {
        if (editMode) {
            console.log(Array.from(document.getElementsByName("firstname"))[0]);
            Array.from(document.getElementsByName("firstname"))[0].value = user.displayName.split(" ")[0];
            Array.from(document.getElementsByName("lastname"))[0].value = user.displayName.split(" ")[1] ? user.displayName.split(" ")[1] : "";
            Array.from(document.getElementsByName("email"))[0].value = user.email;
            Array.from(document.getElementsByName("phone"))[0].value = user.phoneNumber;
            Array.from(document.getElementsByName("address"))[0].value = user.address ? user.address : "";
            values.username = user.displayName;
            values.email = user.email;
            values.phone = user.phoneNumber;
            values.address = user.address;
        }
    }

    return <section>
        <div className="user">
            <div className="page-title">
                <h2>Profile</h2>
            </div>
            <div className="user-img">
                <img className="user-img-icon" src="" alt="" />
            </div>
            <div className="user-name">
                <label>
                    First Name
                    <br />
                    {!editMode &&
                        <input type="text" name="firstname" className="first-name disable" disabled={true} value={user.displayName ? user.displayName.split(" ")[0] : "First Name"} />
                    }
                    {editMode &&
                        <input type="text" name="firstname" className="first-name" onChange={handleInput} value={values.firstname} />
                    }
                </label>
                <label>
                    Last Name
                    <br />
                    {!editMode &&
                        <input type="text" name="lastname" className="first-name disable" disabled={true} value={user.displayName ? user.displayName.split(" ")[1] : "Last Name"} />
                    }
                    {editMode &&
                        <input type="text" name="lastname" className="first-name" onChange={handleInput} value={values.lastname} />
                    }
                </label>
            </div>
            <div className="user-email">
                <label>
                    Email
                    <br />
                    {!editMode &&
                        <input type="email" name="email" className="email disable" disabled={true} value={user.email ? user.email : "email@example.com"} />
                    }
                    {editMode &&
                        <input type="email" name="email" className="email" onChange={handleInput} value={values.email} />
                    }
                </label>
            </div>
            <div className="user-contact-number">
                <label>
                    Contact Numebr
                    <br />
                    {!editMode &&
                        <input type="number" name="phone" className="contact-number disable" disabled={true} value={user.phoneNumber ? user.phoneNumber : 1234567890} />
                    }
                    {editMode &&
                        <input type="number" name="phone" className="contact-number" onChange={handleInput} value={values.phone} />
                    }
                </label>
            </div>
            <div className="user-address">
                <label>
                    Address
                    <br />
                    {!editMode &&
                        <textarea name="address" className="address disable" disabled={true} cols="40" rows="5"
                            defaultValue={user.address ? user.address : "Your Address"}></textarea>
                    }
                    {editMode &&
                        <textarea name="address" className="address" onChange={handleInput} cols="40" rows="5"
                            value={values.address}></textarea>
                    }
                </label>
            </div>
            <button className="user-save" onClick={toggleEditMode}>{editMode ? "Save" : "Edit"}</button>
        </div>
    </section >;
}
