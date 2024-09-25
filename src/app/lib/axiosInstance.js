import axios from 'axios';

const axioInstance = axios.create({
    baseURL: 'http://localhost:5193/api/v1',
    headers:{
        'Content-Type': 'application/json',
    },
});


export default axioInstance;