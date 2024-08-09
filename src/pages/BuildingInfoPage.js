import { BuildingInfo } from '../components/BuildingInfo/BuildingInfo';
import { Select } from '../components/Select/Select';
import { useState, useEffect } from 'react';
import { fetchAllBuildings, fetchBuildingById } from '../services/buildingService';

export function BuildingInfoPage({selectedBuilding, setselectedBuilding}) {
    const [allBuildings, setAllBuildings] = useState([]);
  
    useEffect(() => {
      fetchAllBuildings()
      .then((data) => {
        setAllBuildings(data);
        if (data.length > 0)
          setselectedBuilding([data[0]])
      })
    }, []);
  
    function handleSelect(event) {
      fetchBuildingById(event.target.value)
      .then((data) => {setselectedBuilding(data);
      })
    };

    return (
        <div>
            <Select labelText="BUILDING NAME" idSelect='Building' nameSelect='Building ' handleSelect={handleSelect} selectOptions={allBuildings} optionKey="building_id" optionValue="building_id" optionText="name"/> 
            {selectedBuilding && <BuildingInfo selectedBuilding={selectedBuilding}/>}
        </div>
    );
}