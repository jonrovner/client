import logo from './logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
    <div>
        <Link to="/">
            <img src={logo} className="" alt="logo" height="55vh"/>
        </Link>
        
    </div> 
    );
}

export default Header;