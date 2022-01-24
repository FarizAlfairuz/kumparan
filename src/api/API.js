import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/'

const API = axios.create({
    baseURL: baseURL,
})

export default API