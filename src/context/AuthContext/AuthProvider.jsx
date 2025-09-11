import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase/firebase.init';



const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //SignUp
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Login/SignIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //SignIn with Google
    const signInWithGoogle =() =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider )
    }


    // Logout
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    })


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signOutUser,

    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;