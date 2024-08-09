import "../App.css";

export function LocalInfoPage({selectedBuilding, selectedLocals}) {

    return (
        <>
            { selectedLocals.map( (localProperty) => 
                <ul key={localProperty.local_id} className={selectedBuilding[0].name === localProperty.building_name ? "selectedBuildingLocal" : "nonSelectedBuildingLocal"}>
                    <li> Building Name : {localProperty.building_name} </li> 
                    <li> Local Number : {localProperty.local_number} </li>  
                    <li> Gross Surface : {localProperty.total_gross_surface} </li>
                </ul>
            )}
        </>
    )
}
