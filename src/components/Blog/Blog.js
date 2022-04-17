import React from 'react';
import Menubar from '../Shared/Menubar/Menubar';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Menubar />
            <div className='container'>
                <h2>1. Difference between Authentication & Authorization</h2>
                <p><strong>Authentication:</strong> Authentication defines that the identification of identity. It means  ensuring the system, who you are to the system.</p>
                <p><strong>Authorization:</strong> Authorization defines that the power or the responsibility according to your identification. It also defines what can you do according to your identification in the system.</p>
                <br />
                <h2>2. Why we use firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is a Google's platform/library. Mostly firebase is used for authentication in our system because of it is Google's product, highly secured, easy to use SDKs.
                </p>
                <p>Except firebase authentication there are many other third party library to implement. They are -
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                        <li>JSON Web Token</li>
                        <li>Supabase</li>
                        <li>Doku</li>
                        <li>Amazon Cognito etc.</li>
                    </ul>
                </p>
                <br />
                <h2>3.What other services does firebase provide other than authenticatiion?</h2>
                Developer's uses Firebase for some other purposes, like -
                <ul>
                    <li>Real time database</li>
                    <li>Remote Config</li>
                    <li>Cloud Messaging</li>
                    <li>Cloud Storage</li>
                    <li>Develop ios</li>
                    <li>Develop android & web</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;