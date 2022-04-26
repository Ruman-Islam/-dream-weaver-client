import axios from "axios";
import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./firebase.init";


const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Dynamically set loading , user, error //
    const [user, setUser] = useState(null);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [fbLoading, setFbLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [resetEmail, setResetEmail] = useState(false);


    // sign in with google hook //
    const googleSignIn = async e => {
        setGoogleLoading(true);
        e.preventDefault();
        await signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const { data } = await axios.post('https://secret-basin-49124.herokuapp.com/login', { email: result.user.email })
                localStorage.setItem('accessToken', data);
                setUser(result.user);
                navigate(from, { replace: true });
                setGoogleLoading(false);
            }).catch((error) => {
                setError(error.message);
                setGoogleLoading(false);
            });
    }

    // sign in with facebook hook //
    const facebookSignIn = async e => {
        setFbLoading(true);
        e.preventDefault();
        await signInWithPopup(auth, facebookProvider)
            .then(async (result) => {
                const { data } = await axios.post('https://secret-basin-49124.herokuapp.com/login', { email: result.user.email })
                localStorage.setItem('accessToken', data);
                setUser(result.user);
                navigate(from, { replace: true });
                setFbLoading(false);
            }).catch((error) => {
                setError(error.message);
                setFbLoading(false);
            });
    }

    // Sign in with email and password hook //
    const handleSignWithInEmailAndPassword = async (email, password) => {
        setEmailLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                setUser(result.user);
                const { data } = await axios.post('https://secret-basin-49124.herokuapp.com/login', { email: result.user.email })
                localStorage.setItem('accessToken', data);
                navigate(from, { replace: true });
                setEmailLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setEmailLoading(false);
            });
    }

    // Create user hook //
    const handleCreateAccountWithEmailAndPassword = (name, email, password) => {
        setEmailLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(result.user);
                    setEmailLoading(false);
                    navigate('/home');

                }).catch((error) => {
                    setError(error.message);
                    setEmailLoading(false);
                });
            })
            .catch((error) => {
                setError(error.message);
                setEmailLoading(false);
            });
    }

    // Monitoring user logged in //
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    // sign out hook //
    const handleSignOut = async () => {
        await signOut(auth).then(() => {
            setUser(null);
            navigate('/')
        }).catch((error) => {
            setError(error.message);
        });
    }

    // Reset password hook //
    const handlePasswordReset = email => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // setting true for showing toast //
                setResetEmail(true);
            })
            .catch((error) => {
                setError(error.message);
                setResetEmail(false);
            });
    }

    return {
        googleSignIn,
        facebookSignIn,
        handleSignWithInEmailAndPassword,
        handleCreateAccountWithEmailAndPassword,
        handleSignOut,
        handlePasswordReset,
        googleLoading,
        fbLoading,
        emailLoading,
        user,
        error,
        resetEmail,
        setResetEmail
    }
}

export default useFirebase;