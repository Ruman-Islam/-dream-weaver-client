import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    const notify = () => {
        toast.success("A email verification code is sent.", {
            position: toast.POSITION.TOP_CENTER
        });
    }


    if (loading) { // Preventing redirecting to login page //
        return (
            <div style={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    if (!user.emailVerified) {
        return (
            <div className='verify-btn-container'>
                <h1>Verify your email then reload the page again.</h1>
                <button
                    className='verify-btn'
                    onClick={async () => {
                        await sendEmailVerification(auth.currentUser)
                            .then(() => {
                                // Email verification sent!
                                notify();
                            });
                    }}>Send Code</button>
            </div>
        )
    }

    return children;
};

export default RequireAuth;