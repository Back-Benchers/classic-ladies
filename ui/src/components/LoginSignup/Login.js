import React from 'react';
import { Link, Redirect } from "react-router-dom"
import useForm from "./useForm";
import validate from "./Validation";
import FormSuccess from "./FormSuccess";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

export default function Login() {

    const { handleInput, handleLogin, values, errors, isSubmitting } = useForm(validate);

    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <section>
            {(Object.keys(errors).length === 0 && isSubmitting) ? (<Redirect to="/" />) :
                (<div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} autoComplete="off" noValidate>
                        <div className="form-input">
                            <label>Email</label>
                            <input name="email" type="email" onChange={handleInput} value={values.email} />
                            {errors.email && <small className="form-error">{errors.email}</small>}
                        </div>

                        <div className="form-input">
                            <label>Password <span className="tooltip"> &#9432;
                                <span className="tooltip-text">Password must have atleast: <br /><br />
                                    &#8226; 1 digit (0-9)<br />
                                    &#8226; 1 uppercase &amp; 1 lowercase alphabet<br />
                                    &#8226; 1 special character (!#$@^%&amp;?)<br />
                                    &#8226; 8 characters &amp; less than 20 characters</span>
                            </span>
                            </label>
                            <input name="password" type="password" onChange={handleInput} value={values.password} />
                            {errors.password && <small className="form-error">{errors.password}</small>}
                        </div>

                        <button type="submit" className="form-btn">Login</button><br />
                        <div className="login-provider">
                            <h2>Google Sign In</h2>
                        </div>
                        <small>
                            Don't have an account? <Link to='/register'>Signup here</Link>
                        </small>
                    </form>
                </div>)}
        </section>
    )
}
