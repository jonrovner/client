import logo from './logo.png';
import './App.css';
import LoginButton from './login';
import Profile from './profile';
import MenuSemanal from './menusemanal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/menusemanal" element={<MenuSemanal />}></Route>
        

    </Routes>
    
          
          
        
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        
        <p>
         Site under construction
        </p>
        <LoginButton/>
        <Profile />
      </header>
    </div> 
     
     </Router>
    
  );
}

export default App;
