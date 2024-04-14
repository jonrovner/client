import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


function Home() {

    const {isAuthenticated } = useAuth0() 
    
    return ( <div>

        <h2>Hello</h2>
        <div>
        

        </div>

        {isAuthenticated && 
        <Link to="/profile">Profile</Link>

        }

    </div> );
}

export default Home;