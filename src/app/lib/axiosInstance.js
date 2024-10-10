    import axios from 'axios';

    const axioInstance = axios.create({
        baseURL: 'http://localhost:5193/api/v1',
        headers:{
            'Content-Type': 'application/json',
        },
        cache: {
            maxAge: 15 * 60 * 1000, // Cache responses for 15 minutes
            exclude: { query: false }, // Cache requests with query parameters
        },
    });


    export default axioInstance;