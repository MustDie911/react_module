import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments"
});

const getComments = (post) => axiosInstance.post('', post);


export {getComments}