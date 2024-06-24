export function Select ({ idSelect, nameSelect, handleSelect, allBuildings }) {
  return ( 
    <>
      <p>Choisir l'édifice : </p>
      <select className="select" id={idSelect} name={nameSelect} onChange={ handleSelect }>
        { allBuildings.map((property) => <option key={ property.building_id } value={ property.building_id } > { property.name } </option>)};
      </select>
      </>
    )
  }