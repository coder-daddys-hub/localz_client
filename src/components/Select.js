export function Select ({ handleSelect, allbuildings }) {
    return ( 
      <>
        <p>Choisir l'édifice : </p>
        <select className="select" id="BUILDING" name="BUILDING" onChange={ handleSelect }>
          { allbuildings.map((property) => <option key={ property.building_id } value={ property.building_id } > { property.name } </option>)};
        </select>
        </>
      )
    }