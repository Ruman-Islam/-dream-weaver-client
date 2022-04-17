import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../Firebase/useFirebase';
import CustomLink from '../../CustomLink/CustomLink';
// import defaultImg from '../../../assets/images/photoplaceholder.jpg';
import './Menubar.css';

const Menubar = () => {
    const { user, handleSignOut } = useFirebase();
    const navigate = useNavigate();
    return (
        <nav>
            <div><h2 className='nav-title'>Dream Weaver</h2></div>
            <div className='navigation-items'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to="/Packages">Packages</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {/* <div>
                    <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={user?.photoURL ? user?.photoURL : defaultImg} alt="" />
                </div> */}
                {user?.email ?
                    <div>
                        <button style={{ marginTop: '15px' }} onClick={handleSignOut}>
                            Log out
                        </button>
                        <small style={{ marginLeft: '12px', fontSize: '12px', display: 'block' }}>
                            <strong>
                                {user.displayName ? `Hi, ${user.displayName.split(' ')[0]}` : ''}
                            </strong>
                        </small>
                    </div>
                    :
                    <button onClick={() => navigate('/login')}>
                        Log In
                    </button>}
            </div>
        </nav>
    );
};

export default Menubar;