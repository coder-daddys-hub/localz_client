export function BuildingInfo ({ selectedBuilding }) {
    return( selectedBuilding.map( (property) => 
      <div key={ property.building_id }> 
        <p>NOM: { property.name }</p>
        <p>ADRESSE: { property.streetnumber} , { property.street }</p>
        <p>{ property.postalcode } { property.town }</p>
        <p>SUPERFICIE: { property.surface } pi.ca</p>
      </div> )
    )
  }