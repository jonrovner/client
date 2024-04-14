
import React, { useEffect, useState } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  
  const { user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
  
  const [expiration, setExpiration] = useState("")
  const [accessToken, setAccssToken] = useState("")

    useEffect(() => {

      async function getTokenClaims() {
        try {
          const token = await getIdTokenClaims()
            
            if (token) {setExpiration(new Date(token.exp*1000).toLocaleString())}
          
        } catch (e) {
          console.error(e);
        }

      }
      getTokenClaims()
        
    },); 

    const getToken = () => {

      getAccessTokenSilently().then( token => {
        
        setAccssToken(token)
        
        ;}, error => {console.log(error);})

    }

    
  
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>id token expiration {expiration}</p>
          <button onClick={()=> getToken()}>token</button>
          {(accessToken !=="") && <div>{accessToken}</div>}
          
            
        </div>
      )
    );
  };
  
  export default Profile;