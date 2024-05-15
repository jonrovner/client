import { useAuth0 } from "@auth0/auth0-react";


function LoginButton() {

    const {
       
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

    return ( 
        <>
        
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>log in</button>}
        {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</button>
        }
        </>
     );
}

export default LoginButton;