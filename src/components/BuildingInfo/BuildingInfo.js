import React, { useState, useEffect } from 'react';

export function BuildingInfo({ selectedBuilding }) {
  const [buildingSurface, setBuildingSurface] = useState(0);

  useEffect(() => {
    if (selectedBuilding.length > 0) {
      setBuildingSurface(selectedBuilding[0].surface);
    }
  }, [selectedBuilding]);

  function handleChangeMeasure(e) {
    if (e.target.value === "me.ca") {
      setBuildingSurface((selectedBuilding[0].surface / 10.764).toFixed(2));
    } else if (e.target.value === "pi.ca") {
      setBuildingSurface(selectedBuilding[0].surface);
    }
  }

  return (
    selectedBuilding.map((property) =>
      <div key={property.building_id}>
        <p>NOM: {property.name}</p>
        <p>ADRESSE: {property.street_number}, {property.street}</p>
        <p>{property.zip_code} {property.city}</p>
        <p>SUPERFICIE: {buildingSurface}</p>
        <select onChange={handleChangeMeasure}>
          <option key="0" value="pi.ca"> p2 </option>
          <option key="1" value="me.ca"> m2 </option>
        </select>
      </div>)
  )
}