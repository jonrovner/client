import { useAuth0 } from "@auth0/auth0-react";


function LoginButton() {

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

      const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
      });
      
      
      console.log("user is ", user)
      console.log("isAuthenticated is ", isAuthenticated)



    return ( 
        <>
        
        {!isAuthenticated && <button onClick={() => loginWithRedirect()}>login</button>}
        {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</button>
        }
        </>
     );
}

export default LoginButton;