import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BuildingInfoPage } from './pages/BuildingInfoPage';
import { useState } from 'react';
import { fetchLoginAuthentication } from './services/loginService';
import { BasicLNEInfoPage } from './pages/BasicLNEInfoPage';

export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(true);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

function handleLogin(e) {
  e.preventDefault();
  fetchLoginAuthentication(username, password)
   .then(response => {
      if (response.length > 0)
        {setIsLoggedIn(true);}
    })
    .catch(error => console.error('Error fetching login credentials:', error));
}
  return (
    <>
      <div>
      {isLoggedIn ? ( <>
          <BuildingInfoPage />
          <BasicLNEInfoPage />
          </>
        ) : (
          <LoginPage handleLogin={handleLogin} setPassword={setPassword} setUsername={setUsername}/>
        )}

      </div>
    </>
  );
}