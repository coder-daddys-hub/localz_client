import { useState, useEffect } from 'react';
import { Select } from '../components/Select/Select'
import { fetchLeaseTypes } from '../services/leaseTypeService'
import { Input } from '../components/Input/Input'
import { Button } from '../components/Button/Button'
import { generateYearsRange } from '../tools/generateNumericRange';
import { fetchVacantLocalsBySurface } from '../services/localService';


export function BasicLNEInfoPage({selectedBuilding, setSelectedLocal, surface, setSurface}) {
    const years = generateYearsRange(1, 10);
    const months = generateYearsRange(1, 12);
    const [selectedLeaseType, setSelectedLeaseType] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {  
        fetchLeaseTypes()
        .then((data) => {
            setSelectedLeaseType(data);
        })
    }, []);

    function handleInputChange(event) {
        // Check if the input is a number 
        if (/\D/g.test(event.target.value)) {
            event.target.value = event.target.value.replace(/\D/g, "" )
            setErrorMessage("Please enter a number");
        } else { 
            setErrorMessage(""); 
        }  
        setSurface(event.target.value);
    }

    function handleSubmitSettings(event) {
        event.preventDefault();
        const buildingID = selectedBuilding.length > 0 ? selectedBuilding[0].building_id : 1;
        fetchVacantLocalsBySurface(surface, buildingID)
        .then(response => {
          if (response.length > 0)
            {setSelectedLocal(response)}
        });
      }

    return (
    <>
        <Input labelName="SURFACE" onChange={handleInputChange} placeholder="Surface" type="text"/>
        <p>{errorMessage}</p>
        <Select labelText="LEASE TYPE" idSelect="Lease_type" nameSelect="Lease_type" selectOptions={selectedLeaseType} optionKey="id" optionValue="type" optionText="type"/>
        <Select labelText="LEASE DURATION" idSelect="Lease_time" nameSelect="Lease_time" selectOptions={years} optionKey="id" optionValue="value" optionText="value"/>
        <p>years</p>
        <Select idSelect="Lease_time" nameSelect="Lease_time" selectOptions={months} optionKey="id" optionValue="value" optionText="value"/>
        <p>months</p>
        <Button className="submit" handleClick={handleSubmitSettings} type="submit" buttonText="SUBMIT"/> 
    </>
);
}
