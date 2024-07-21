import { useState, useEffect } from 'react';
import { Select } from '../components/Select/Select'
import { fetchLeaseTypes } from '../services/leaseTypeService'
import { Input } from '../components/Input/Input'
import { Button } from '../components/Button/Button'
import { generateYearsRange } from '../tools/generateNumericRange';

export function BasicLNEInfoPage() {
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

    function handleSelectLeaseType(e) { console.log(e.target.value) } //usefull ??
    function handleSelectLeaseTime(e) { console.log(e.target.value) } //usefull ??

    function handleInputChange(e) {
        // Check if the input is a number 
        if (/\D/g.test(e.target.value)) {
            e.target.value = e.target.value.replace(/\D/g, "" )
            setErrorMessage("Please enter a number");
        } else { 
            setErrorMessage(""); 
        }  
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("on submit display available list of locals and their sizes ordered by size, first one being closest to required surface")
    }

    return (
    <>
        <Input labelName="SURFACE" onChange={handleInputChange} placeholder="Surface" type="text"/>
        <p>{errorMessage}</p>
        <Select labelText="LEASE TYPE" idSelect="Lease_type" nameSelect="Lease_type" handleSelect={handleSelectLeaseType} selectOptions={selectedLeaseType} optionKey="id" optionValue="type" optionText="type"/>
        <Select labelText="LEASE DURATION" idSelect="Lease_time" nameSelect="Lease_time" handleSelect={handleSelectLeaseTime} selectOptions={years} optionKey="id" optionValue="value" optionText="value"/>
        <p>years</p>
        <Select idSelect="Lease_time" nameSelect="Lease_time" handleSelect={handleSelectLeaseTime} selectOptions={months} optionKey="id" optionValue="value" optionText="value"/>
        <p>months</p>
        <Button className="submit" handleClick={handleSubmit} type="submit" buttonText="SUBMIT"/> 
    </>
);
}
