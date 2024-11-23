import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'https://cms.labcom-optimaa.com',
})

export default axiosInstance
