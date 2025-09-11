import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimationData from '../../assets/lottie/Login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import GoogleLogin from '../shared/socialLogin/GoogleLogin';

const SignIn = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">

                    <Lottie animationData={loginAnimationData}></Lottie>
                </div>
                <form onSubmit={handleSignIn} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


                    <h1 className="text-5xl text-center mt-4 font-bold">SignIn Now!</h1>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            {/* Show validation error */}
                            {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>


                        </fieldset>

                    </div>
                    
                        <div className="divider">OR</div>
                        <div className='btn m-5'>
                             <GoogleLogin></GoogleLogin>
                        </div>

                </form>
                
                




            </div>
            

        </div>
    );
};

export default SignIn;