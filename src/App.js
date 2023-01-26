import logo from './logo.png';
import './App.css';
import LoginButton from './login';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
        Rovner Solutions
        </p>
        <p>
         Site under construction
        </p>
        <LoginButton/>
        <Profile />
      </header>
    </div>
  );
}

export default App;
