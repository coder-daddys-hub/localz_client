import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BuildingInfoPage } from './pages/BuildingInfoPage';
import { useState } from 'react';
import { fetchLoginAuthentication } from './services/loginService';

export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      {isLoggedIn ? (
          <BuildingInfoPage />
        ) : (
          <LoginPage handleLogin={handleLogin} setPassword={setPassword} setUsername={setUsername}/>
        )}

      </div>
    </>
  );
}