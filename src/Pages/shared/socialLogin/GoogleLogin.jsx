import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';

const GoogleLogin = () => {
    const{signInWithGoogle} = useContext(AuthContext);

    const handleGoogleSignIn =() =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>SignIn With Google</button>
        </div>
    );
};

export default GoogleLogin;