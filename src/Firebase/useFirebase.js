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
    const googleSignIn = e => {
        setGoogleLoading(true);
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
                setGoogleLoading(false);
            }).catch((error) => {
                setError(error.message);
                setGoogleLoading(false);
            });
    }

    // sign in with facebook hook //
    const facebookSignIn = e => {
        setFbLoading(true);
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true });
                setFbLoading(false);
            }).catch((error) => {
                setError(error.message);
                setFbLoading(false);
            });
    }

    // Sign in with email and password hook //
    const handleSignWithInEmailAndPassword = (email, password) => {
        setEmailLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
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
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await setUser(user);
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