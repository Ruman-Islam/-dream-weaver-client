import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../Firebase/useFirebase';
import CustomLink from '../../CustomLink/CustomLink';
import defaultImg from '../../../assets/images/photoplaceholder.jpg';
import useNav from '../../../Hooks/useNav';
import './Menubar.css';

const Menubar = () => {
    const { navbar } = useNav();
    const { user, handleSignOut } = useFirebase();
    const navigate = useNavigate();
    return (
        <nav className={`${navbar && 'navbar-background'}`}>
            <div className='navbar-wrapper'>
                <div>
                    <h1 className='nav-title'>Photometry</h1>
                </div>
                <div className='navigation-items'>
                    <small className='username'>
                        <strong>
                            {user?.displayName ? `Hi ${user?.displayName.split(' ')[0]},` : ''}
                        </strong>
                    </small>
                    <CustomLink className={navbar && 'nav-link'} to='/home'>Home</CustomLink>
                    <CustomLink className={navbar && 'nav-link'} to="/Packages">Packages</CustomLink>
                    <CustomLink className={navbar && 'nav-link'} to="/about">About me</CustomLink>
                    <CustomLink className={navbar && 'nav-link'} to="/blog">Blog</CustomLink>

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
            </div>
        </nav>
    );
};

export default Menubar;