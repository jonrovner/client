import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    return ( <div>

        <h2>Hello</h2>
        <Link to="/profile">Profile</Link>
    </div> );
}

export default Home;