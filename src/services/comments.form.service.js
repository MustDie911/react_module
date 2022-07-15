import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/comments"
});

const getComments = (post) => axiosInstance.post('', post);


export {getComments}