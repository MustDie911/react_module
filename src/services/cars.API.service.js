let baseUrl = 'http://owu.linkpc.net/api/v2/cars'

let addCar = (data) => {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => console.log(data));

}

export {addCar}