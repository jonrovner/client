
import React, { useEffect, useState } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  
  const { user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
  
  console.log('USER  ', user);

  const [expiration, setExpiration] = useState("")

    useEffect(() => {
      
      async function getTokenClaims() {
        try {
          const token = await getIdTokenClaims()
            console.log('SUCCESSFULL TOKEN', token)
            //console.log('EXPIRATION', new Date(token.exp*1000)
            if (token) {setExpiration(new Date(token.exp*1000).toLocaleString())}
          
        } catch (e) {
          console.error(e);
        }

      }
      getTokenClaims()
        
    },); 

    const getToken = () => {
      getAccessTokenSilently().then( token => {console.log(token);}, e => {console.log(e);})

    }

    
  
    return (
      isAuthenticated && (
        <div>
        <p>your ID token will expire on {expiration}</p>
          <p>your latest login was on {user.updated_at}</p>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={()=> getToken()}>token</button>
          
            
        </div>
      )
    );
  };
  
  export default Profile;