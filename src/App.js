import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BuildingInfoPage } from './pages/BuildingInfoPage';
import { useState } from 'react';
import { fetchLoginAuthentication } from './services/loginService';
import { BasicLNEInfoPage } from './pages/BasicLNEInfoPage';
import { LocalInfoPage } from './pages/LocalInfoPage';

export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(true);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [selectedBuilding, setselectedBuilding] = useState([]);
const [selectedLocals, setSelectedLocal] = useState([]);
const [surface, setSurface] = useState(0);

  function handleLogin(event) {
    event.preventDefault();
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
          <BuildingInfoPage selectedBuilding={selectedBuilding} setselectedBuilding={setselectedBuilding}/>
          <BasicLNEInfoPage selectedBuilding={selectedBuilding} setSelectedLocal={setSelectedLocal} surface={surface} setSurface={setSurface}/>
          <LocalInfoPage  selectedBuilding={selectedBuilding} selectedLocals={selectedLocals}/>
          </>
        ) : (
          <LoginPage handleLogin={handleLogin} setPassword={setPassword} setUsername={setUsername}/>
        )}

      </div>
    </>
  );
}