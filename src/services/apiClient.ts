import axios from 'axios'

export default axios.create({
    baseURL: 'https://spannerbackend-ancient-snowflake-7021.fly.dev',
    withCredentials: true,
    // params: {
    //     key: 'session_id=90a2ee22-e839-4acf-9733-5c7de1122ed6',
    // },
})
