import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BuildingInfoPage } from './pages/BuildingInfoPage';
import { useState } from 'react';
import { fetchLoginAuthentication } from './services/loginService';

//TODO I I NEED TO WORKK OUT WHY THE RESPONSE FROM THE API IS EMPTY, PROBLEM LIES ON CLIENT SIDE, POSTMAN WORKS, API CODE OKç
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
console.log(isLoggedIn);
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