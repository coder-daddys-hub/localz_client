const baseUrl = 'http://localhost:3002/';

export const fetchLeaseTypes = () => {
    return fetch(baseUrl+'lease/leasetype')
      .then(res => res.json())
      .catch(error => console.error('Error fetching lease types:', error));
  };
  