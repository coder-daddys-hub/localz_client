const baseUrl = 'http://localhost:3002/buildings/';

export const fetchAllBuildings = () => {
    return fetch(baseUrl)
      .then(res => res.json())
      .catch(error => console.error('Error fetching buildings:', error));
  };
  
export const fetchBuildingById = (buildingId) => {
  return fetch(`${baseUrl}${buildingId}`)
    .then(res => res.json())
    .catch(error => console.error('Error fetching building:', error));
};