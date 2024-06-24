import './App.css';
import { useState, useEffect } from 'react';
import { fetchAllBuildings, fetchBuildingById } from './services/buildingService';
import { BuildingInfo } from './components/BuildingInfo';
import { Select } from './components/Select';


export default function App() {
  const [allbuildings, setAllbuildings] = useState([]);
  const [selectedbuilding, setSelectedbuilding] = useState([]);

  useEffect(() => {
    fetchAllBuildings()
    .then((data) => {
      setAllbuildings(data);
      if (data.length > 0)
        setSelectedbuilding([data[0]])
    })
  }, []);

  function handleSelect(e) {
    fetchBuildingById(e.target.value)
    .then((data) => {setSelectedbuilding(data);
    })
  };

  return (
    <>
      <div>
        <Select handleSelect={ handleSelect } allbuildings={ allbuildings }/> 
        {selectedbuilding && <BuildingInfo selectedbuilding={ selectedbuilding }/>}
      </div>
    </>
  );
}