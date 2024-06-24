import './App.css';
import { useState, useEffect } from 'react';
import { fetchAllBuildings, fetchBuildingById } from './services/buildingService';
import { BuildingInfo } from './components/BuildingInfo';
import { Select } from './components/Select';


export default function App() {
  const [allBuildings, setAllBuildings] = useState([]);
  const [selectedBuilding, setselectedBuilding] = useState([]);

  useEffect(() => {
    fetchAllBuildings()
    .then((data) => {
      setAllBuildings(data);
      if (data.length > 0)
        setselectedBuilding([data[0]])
    })
  }, []);

  function handleSelect(e) {
    fetchBuildingById(e.target.value)
    .then((data) => {setselectedBuilding(data);
    })
  };

  return (
    <>
      <div>
        <Select idSelect='Building' nameSelect='Building 'handleSelect={ handleSelect } allBuildings={ allBuildings }/> 
        {selectedBuilding && <BuildingInfo selectedBuilding={ selectedBuilding }/>}
      </div>
    </>
  );
}