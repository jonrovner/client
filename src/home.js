import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Projects from './Projects';

function Home() {

    const {isAuthenticated } = useAuth0() 
    
    return ( 
    <div className='home_container'>
      <div className="headline">
        <h1>Full-Stack Developer | Authentication & Access Control Specialist</h1>
      </div>
        <div>
            <p>I'm a full-stack developer specialized in user identity and access control. I'm currently on the look for my next adventure.</p>
            <p>I'm passionate about learning, helping and building applications that solve daily life problems.</p>
           
        </div>
        <Projects />
       
        </div>   );
}

export default Home;