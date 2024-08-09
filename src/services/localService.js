const baseUrl = 'http://localhost:3002/';

export const fetchLocals = () => {
  return fetch(baseUrl+'locals')
    .then(res => res.json())
    .catch(error => console.error('Error fetching locals: ', error));
};
  
export const fetchAllVacantLocals = () => {
  return fetch(baseUrl+'locals/vacant')
    .then(res => res.json())
    .catch(error => console.error('Error fetching vacant locals: ', error));
};

export const fetchVacantLocalsBySurface = (surface, buildingID) => {
  return fetch(baseUrl+'locals/vacant/'+ surface + '/' + buildingID)
  .then(res => res.json())
  .catch(error => console.error('error fetching vacant locals filtered by surface: ', error));
};
