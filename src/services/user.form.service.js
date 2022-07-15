let baseUrl = "http://jsonplaceholder.typicode.com/users";

let addUser = (data)=>{
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

export {addUser}