export const fetchLoginAuthentication = (username, password) => {
    return fetch('http://localhost:3002/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                        user: username,
                        pwd: password
                    }),
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json()
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error fetching login credentials:', error));
}
