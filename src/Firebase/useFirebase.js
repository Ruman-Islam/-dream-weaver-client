import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
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

    const [user, setUser] = useState(null);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [fbLoading, setFbLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [resetEmail, setResetEmail] = useState(false);

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

    const handleCreateAccountWithEmailAndPassword = (name, email, password) => {
        setEmailLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(async () => {
                    await sendEmailVerification(auth.currentUser)
                        .then(() => {
                            // Email verification sent!
                            // ...
                            setUser(result.user);
                            setEmailLoading(false);
                            navigate((-3), from, { replace: true });
                        });
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

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
            navigate('/')
        }).catch((error) => {
            setError(error.message);
        });
    }

    const handlePasswordReset = email => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
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
        resetEmail
    }
}

export default useFirebase;