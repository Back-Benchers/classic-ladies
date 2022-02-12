import { useState, useEffect } from "react";
import './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { DataContext } from "../DataProvider.js";
import { useContext } from "react";

const useForm = (validate) => {
    const value = useContext(DataContext);
    const [values, setValues] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const setNewUser = value.setNewUser;

    const handleInput = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleLogout = event => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                setNewUser(user);
                console.log(uid);
            } else {
                // User is signed out
                // ...
                console.log("Logged Out");
            }
        });
    };

    const handleLogin = event => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log("user:", user);
                localStorage.setItem("user", JSON.stringify(user));
                setNewUser(user);
                setIsSubmitting(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("errorCode:", errorCode, "\nerrorMessage:", errorMessage);
            });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // setErrors(validate(values));
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 

                updateProfile(userCredential.user, {
                    displayName: values.username, photoURL: ""
                }).then(() => {
                    // Profile updated!
                    // ...
                    console.log("profile updated");
                }).catch((error) => {
                    // An error occurred
                    // ...
                    console.log("profile update failed");
                });

                const user = userCredential.user;
                // ...
                console.log("user:", user);
                localStorage.setItem('user', JSON.stringify(user));
                setNewUser(user);
                setIsSubmitting(true);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log("errorCode:", errorCode, "\nerrorMessage:", errorMessage);

            });
    };

    return {
        handleInput,
        handleSubmit,
        handleLogin,
        values,
        errors,
        isSubmitting
    };
};

export default useForm;
