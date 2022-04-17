import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading,] = useAuthState(auth);

    if (loading) {
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

    return children;
};

export default RequireAuth;