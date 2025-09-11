import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerAnimationData from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';

const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //  Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters, include 1 uppercase letter and 1 number.");
            return;
        }

        setError(""); // Clear error if valid

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={registerAnimationData}></Lottie>
                </div>
                <form onSubmit={handleSignUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


                    <h1 className="text-5xl text-center mt-4 font-bold">SignUp Now!</h1>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            {/* Show validation error */}
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignUp</button>
                        </fieldset>

                    </div>


                </form>


            </div>
        </div>
    );
};

export default SignUp;