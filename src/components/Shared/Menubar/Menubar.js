import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../Firebase/useFirebase';
import CustomLink from '../../CustomLink/CustomLink';
import defaultImg from '../../../assets/images/photoplaceholder.jpg';
import './Menubar.css';

const Menubar = () => {
    const { user, handleSignOut } = useFirebase();
    const navigate = useNavigate();
    return (
        <nav className='container'>
            <div><h1 className='nav-title'>Dream Weaver</h1></div>
            <div className='navigation-items'>
                <small className='username'>
                    <strong>
                        {user?.displayName ? `Hi, ${user?.displayName.split(' ')[0]}!` : ''}
                    </strong>
                </small>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to="/Packages">Packages</CustomLink>
                <CustomLink to="/about">About me</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>

                {user?.email ?
                    <div>
                        <button onClick={handleSignOut}>
                            Log out
                        </button>
                    </div>
                    :
                    <button onClick={() => navigate('/login')}>
                        Log In
                    </button>}
                <div className='user-profile-photo'>
                    <img src={user?.photoURL ? user?.photoURL : defaultImg} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Menubar;