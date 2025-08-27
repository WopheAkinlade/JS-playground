fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // You can work with the parsed JSON data here
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });