import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


function Home() {

    const {isAuthenticated } = useAuth0() 
    
    return ( 
    <>
        <div>
            <p>I'm a full-stack developer specialized in user identity and access control. I'm currently working as a professional troubleshooter with Auth0 by Okta's Support team.</p>
            <p>I'm passionate about learning, helping and building applications that solve daily life problems.</p>
             {

             }   

        </div>
        <p>This is my latest prject: <a href="https://mfa-dashboard.vercel.app"target="_blank" rel="noopener noreferrer">MFA Dashboard</a></p>
        <p>Here's my <a href="https://github.com/jonrovner"target="_blank" rel="noopener noreferrer">Github</a> profile</p>

        </>   );
}

export default Home;