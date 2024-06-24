import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BuildingInfoPage } from './pages/BuildingInfoPage';
import { useState } from 'react';


export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

function handleLogin() {
  if (!isLoggedIn)
    setIsLoggedIn(true);
  else 
    setIsLoggedIn(false);
}

  return (
    <>
      <div>
      {isLoggedIn ? (
          <BuildingInfoPage />
        ) : (
          <LoginPage handleLogin={handleLogin} />
        )}

      </div>
    </>
  );
}