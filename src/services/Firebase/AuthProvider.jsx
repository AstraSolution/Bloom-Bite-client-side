/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    TwitterAuthProvider,
    FacebookAuthProvider
} from "firebase/auth";

export const AuthContext = createContext(null);


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const TwitterSignIn = async () => {
        setLoading(true);
        try {
          const result = await signInWithPopup(auth, twitterProvider);
          const user = result.user;
          setUser(user);
          setLoading(false);
          return result;
        } catch (error) {
          console.error(error);
          setLoading(false);
          throw error;
        }
      };


      const FaceBookSignIn = async () => {
        setLoading(true);
        try {
          const result = await signInWithPopup(auth, facebookProvider);
          const user = result.user;
          setUser(user);
          setLoading(false);
          return result;
        } catch (error) {
          console.error(error);
          setLoading(false);
          throw error;
        }
      };


    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout =()=> {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("state changed");
            setUser(currentUser);
            setLoading(false);

        });
        return (() => {
           return unsubscribe();
        })
    }, [])
    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        logout,
        loading,
        TwitterSignIn,
        FaceBookSignIn
    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
