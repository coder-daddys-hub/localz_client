export function BuildingInfo ({ selectedBuilding }) {
    return( selectedBuilding.map( (property) => 
      <div key={ property.building_id }> 
        <p>NOM: { property.name }</p>
        <p>ADRESSE: { property.street_number} , { property.street}</p>
        <p>{ property.zip_code } { property.city }</p>
        <p>SUPERFICIE: { property.surface } pi.ca</p>
      </div> )
    )
  }