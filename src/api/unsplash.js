import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7f9e7a0ed16a8d57bb6884e4b6a6856f5aa706486a154ef38306a9e873dfc2e4'
    }
})