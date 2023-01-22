
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

    return ( 
        <>
        <button onClick={() => loginWithRedirect()}>login</button>
        </>
     );
}

export default LoginButton;